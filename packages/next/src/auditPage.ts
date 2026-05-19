import type { OpenGraphProps } from '@seo-mesh/react';

export interface AuditPageOptions {
  schema?: Record<string, unknown>;
  og?: Partial<OpenGraphProps>;
  canonical?: string;
  title?: string;
  description?: string;
  url?: string;
}

export interface AuditIssue {
  rule: string;
  message: string;
  impact: 'error' | 'warning' | 'info';
}

export interface AuditResult {
  score: number;
  passed: string[];
  issues: AuditIssue[];
}

const MAX_SCORE = 100;

export function auditPage(options: AuditPageOptions): AuditResult {
  const passed: string[] = [];
  const issues: AuditIssue[] = [];
  let deductions = 0;

  const { schema, og, canonical, title, description } = options;

  // ── Title ────────────────────────────────────────────────────────────────
  if (title) {
    if (title.length < 10) {
      issues.push({ rule: 'title-length', message: `Title too short (${title.length} chars, recommend 30–60)`, impact: 'warning' });
      deductions += 5;
    } else if (title.length > 60) {
      issues.push({ rule: 'title-length', message: `Title too long (${title.length} chars, Google truncates at ~60)`, impact: 'warning' });
      deductions += 5;
    } else {
      passed.push('Title length is optimal (30–60 chars)');
    }
  } else {
    issues.push({ rule: 'title-missing', message: 'Page title is missing', impact: 'error' });
    deductions += 15;
  }

  // ── Description ──────────────────────────────────────────────────────────
  if (description) {
    if (description.length < 120) {
      issues.push({ rule: 'description-short', message: `Meta description too short (${description.length} chars, recommend 120–160)`, impact: 'warning' });
      deductions += 5;
    } else if (description.length > 160) {
      issues.push({ rule: 'description-long', message: `Meta description too long (${description.length} chars, Google truncates at ~160)`, impact: 'info' });
      deductions += 3;
    } else {
      passed.push('Meta description length is optimal (120–160 chars)');
    }
  } else {
    issues.push({ rule: 'description-missing', message: 'Meta description is missing', impact: 'warning' });
    deductions += 10;
  }

  // ── Canonical ────────────────────────────────────────────────────────────
  if (canonical) {
    passed.push('Canonical URL is set');
  } else {
    issues.push({ rule: 'canonical-missing', message: 'No canonical URL — risk of duplicate content', impact: 'warning' });
    deductions += 10;
  }

  // ── Open Graph ───────────────────────────────────────────────────────────
  if (og?.title) {
    passed.push('og:title is set');
  } else {
    issues.push({ rule: 'og-title', message: 'og:title missing — affects social sharing previews', impact: 'warning' });
    deductions += 8;
  }

  if (og?.description) {
    passed.push('og:description is set');
  } else {
    issues.push({ rule: 'og-description', message: 'og:description missing', impact: 'info' });
    deductions += 3;
  }

  if (og?.image) {
    passed.push('og:image is set');
    if (!og.imageAlt) {
      issues.push({ rule: 'og-image-alt', message: 'og:image:alt missing — accessibility issue', impact: 'info' });
      deductions += 2;
    }
  } else {
    issues.push({ rule: 'og-image', message: 'og:image missing — social previews will show no image', impact: 'warning' });
    deductions += 8;
  }

  // ── JSON-LD Schema ────────────────────────────────────────────────────────
  if (schema) {
    passed.push(`JSON-LD schema present (@type: ${String(schema['@type'] ?? 'unknown')})`);

    if (!schema['description'] && !schema['headline']) {
      issues.push({ rule: 'schema-description', message: 'Schema missing description/headline for AI systems', impact: 'info' });
      deductions += 3;
    }
  } else {
    issues.push({ rule: 'schema-missing', message: 'No JSON-LD structured data — missed rich result opportunity', impact: 'warning' });
    deductions += 15;
  }

  const score = Math.max(0, MAX_SCORE - deductions);
  return { score, passed, issues };
}
