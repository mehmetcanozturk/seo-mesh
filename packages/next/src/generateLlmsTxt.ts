export interface LlmsTxtLink {
  label: string;
  url: string;
  description?: string;
}

export interface LlmsTxtSection {
  title: string;
  links: LlmsTxtLink[];
}

export interface LlmsTxtOptions {
  siteName: string;
  tagline?: string;
  sections: LlmsTxtSection[];
}

export function generateLlmsTxt(options: LlmsTxtOptions): string {
  const lines: string[] = [];

  lines.push(`# ${options.siteName}`);

  if (options.tagline) {
    lines.push('');
    lines.push(`> ${options.tagline}`);
  }

  for (const section of options.sections) {
    lines.push('');
    lines.push(`## ${section.title}`);
    lines.push('');
    for (const link of section.links) {
      const desc = link.description ? `: ${link.description}` : '';
      lines.push(`- [${link.label}](${link.url})${desc}`);
    }
  }

  return lines.join('\n') + '\n';
}
