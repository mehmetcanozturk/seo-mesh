import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  source: string;
  children: ReactNode;
}

function colorize(json: string): string {
  return json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"([^"]+)":/g, '<span class="key">"$1"</span>:')
    .replace(/: "([^"]*)"/g, ': <span class="str">"$1"</span>')
    .replace(/: (-?\d+\.?\d*)/g, ': <span class="num">$1</span>')
    .replace(/: (true|false)/g, ': <span class="bool">$1</span>')
    .replace(/: null/g, ': <span class="null">null</span>');
}

function colorizeSource(src: string): string {
  const e = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const lines = src.split('\n');
  const out: string[] = [];

  for (const line of lines) {
    const trimmed = line.trimStart();

    // Full-line comments
    if (trimmed.startsWith('//')) {
      out.push(`<span class="comment">${e(line)}</span>`);
      continue;
    }

    // Tokenize JSX line character-by-character
    let result = '';
    let i = 0;
    while (i < line.length) {
      // Tag open: < or </
      if (line[i] === '<') {
        result += '&lt;';
        i++;
        if (line[i] === '/') { result += '/'; i++; }
        // Tag name
        const start = i;
        while (i < line.length && /[\w.]/.test(line[i]!)) i++;
        if (i > start) result += `<span class="tag">${line.slice(start, i)}</span>`;
        continue;
      }

      // Self-close or close bracket
      if (line[i] === '>' || (line[i] === '/' && line[i + 1] === '>')) {
        const ch = line[i] === '/' ? '/>' : '>';
        result += ch === '/>' ? '/&gt;' : '&gt;';
        i += ch.length;
        continue;
      }

      // Prop name followed by =
      if (/[a-zA-Z_]/.test(line[i]!) && result.trimEnd().slice(-1) !== '=') {
        const start = i;
        while (i < line.length && /[\w]/.test(line[i]!)) i++;
        const word = line.slice(start, i);
        if (line[i] === '=') {
          result += `<span class="attr">${word}</span>`;
        } else {
          result += e(word);
        }
        continue;
      }

      // String value: ="..."
      if (line[i] === '=' && line[i + 1] === '"') {
        i++; // skip =
        i++; // skip "
        const start = i;
        while (i < line.length && line[i] !== '"') i++;
        const val = line.slice(start, i);
        i++; // closing "
        result += `=<span class="val">"${e(val)}"</span>`;
        continue;
      }

      // JSX expression value: ={...}
      if (line[i] === '=' && line[i + 1] === '{') {
        i++; // skip =
        i++; // skip {
        const start = i;
        let depth = 1;
        while (i < line.length && depth > 0) {
          if (line[i] === '{') depth++;
          else if (line[i] === '}') depth--;
          i++;
        }
        const val = line.slice(start, i - 1);
        result += `=<span class="val">{${e(val)}}</span>`;
        continue;
      }

      result += e(line[i]!);
      i++;
    }

    out.push(result);
  }

  return out.join('\n');
}

export function SchemaStory({ title, description, source, children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [jsonLd, setJsonLd] = useState<string>('');

  useEffect(() => {
    if (!containerRef.current) return;
    const scripts = containerRef.current.querySelectorAll<HTMLScriptElement>(
      'script[type="application/ld+json"]',
    );
    const all: unknown[] = [];
    scripts.forEach((s) => {
      try {
        all.push(JSON.parse(s.textContent ?? ''));
      } catch {}
    });
    if (all.length === 1) {
      setJsonLd(JSON.stringify(all[0], null, 2));
    } else if (all.length > 1) {
      setJsonLd(JSON.stringify(all, null, 2));
    }
  }, [children]);

  const schemaType = jsonLd
    ? (JSON.parse(jsonLd) as Record<string, string>)['@type'] ?? ''
    : '';

  return (
    <div className="story-layout">
      <div className="story-left">
        <div className="story-label">seo-mesh · demo</div>
        <div className="story-title">{title}</div>
        <div className="story-desc">{description}</div>
        <div ref={containerRef}>{children}</div>
      </div>

      <div className="story-right">
        <div className="jsonld-panel">
          <div className="jsonld-header">
            <div className="jsonld-title">Üretilen JSON-LD</div>
            {schemaType && <div className="jsonld-type-badge">@type: {schemaType}</div>}
          </div>
          {jsonLd ? (
            <div
              className="jsonld-code"
              dangerouslySetInnerHTML={{ __html: colorize(jsonLd) }}
            />
          ) : (
            <div className="jsonld-code" style={{ color: '#444' }}>
              Yükleniyor…
            </div>
          )}
          <div style={{ marginTop: '1.5rem' }}>
            <div className="source-label">Kaynak Kod</div>
            <div
              className="source-code"
              dangerouslySetInnerHTML={{ __html: colorizeSource(source) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
