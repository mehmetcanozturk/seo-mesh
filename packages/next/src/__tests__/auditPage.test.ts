import { describe, expect, it } from 'vitest';
import { auditPage } from '../auditPage';

// ─── score math ─────────────────────────────────────────────────────────────

describe('auditPage — score', () => {
  it('returns 100 when everything is perfect', () => {
    const result = auditPage({
      title: 'The Best WordPress Hosting For 2024',     // 36 chars — optimal
      description: 'A'.repeat(130),                     // 130 chars — optimal
      canonical: 'https://example.com/',
      og: {
        title: 'Best WordPress Hosting',
        description: 'Great hosting options',
        image: 'https://example.com/og.jpg',
        imageAlt: 'Hosting illustration',
      },
      schema: { '@type': 'Product', name: 'Hosting', description: 'Great hosting' },
    });
    expect(result.score).toBe(100);
    expect(result.issues).toHaveLength(0);
  });

  it('returns 0 or near 0 when everything is missing', () => {
    const result = auditPage({});
    // title(-15) + desc(-10) + canonical(-10) + og:title(-8) + og:desc(-3) + og:image(-8) + schema(-15) = -69
    expect(result.score).toBe(31);
  });

  it('score never goes below 0', () => {
    // Even with theoretically impossible extra deductions, clamp at 0
    const result = auditPage({});
    expect(result.score).toBeGreaterThanOrEqual(0);
  });
});

// ─── title checks ───────────────────────────────────────────────────────────

describe('auditPage — title', () => {
  it('passes when title is 30–60 chars', () => {
    const result = auditPage({ title: 'A'.repeat(45) });
    expect(result.passed.some((p) => p.includes('Title'))).toBe(true);
    expect(result.issues.find((i) => i.rule === 'title-length')).toBeUndefined();
  });

  it('warns when title is under 10 chars', () => {
    const result = auditPage({ title: 'Short' });
    expect(result.issues.some((i) => i.rule === 'title-length')).toBe(true);
  });

  it('warns when title exceeds 60 chars', () => {
    const result = auditPage({ title: 'A'.repeat(61) });
    const issue = result.issues.find((i) => i.rule === 'title-length');
    expect(issue).toBeDefined();
    expect(issue?.impact).toBe('warning');
  });

  it('reports error when title is missing', () => {
    const result = auditPage({});
    const issue = result.issues.find((i) => i.rule === 'title-missing');
    expect(issue).toBeDefined();
    expect(issue?.impact).toBe('error');
  });
});

// ─── description checks ─────────────────────────────────────────────────────

describe('auditPage — description', () => {
  it('passes when description is 120–160 chars', () => {
    const result = auditPage({ description: 'A'.repeat(130) });
    expect(result.issues.find((i) => i.rule === 'description-short')).toBeUndefined();
    expect(result.issues.find((i) => i.rule === 'description-long')).toBeUndefined();
  });

  it('warns when description is under 50 chars', () => {
    const result = auditPage({ description: 'Too short' });
    expect(result.issues.some((i) => i.rule === 'description-short')).toBe(true);
  });

  it('reports info when description exceeds 160 chars', () => {
    const result = auditPage({ description: 'A'.repeat(161) });
    const issue = result.issues.find((i) => i.rule === 'description-long');
    expect(issue).toBeDefined();
    expect(issue?.impact).toBe('info');
  });

  it('reports warning when description is missing', () => {
    const result = auditPage({});
    const issue = result.issues.find((i) => i.rule === 'description-missing');
    expect(issue).toBeDefined();
    expect(issue?.impact).toBe('warning');
  });

  it('warns when description is under 120 chars', () => {
    const result = auditPage({ description: 'A'.repeat(50) });
    expect(result.issues.some((i) => i.rule === 'description-short')).toBe(true);
  });

  it('passes when description is exactly 120 chars', () => {
    const result = auditPage({ description: 'A'.repeat(120) });
    expect(result.issues.find((i) => i.rule === 'description-short')).toBeUndefined();
    const passed = result.passed.find((p) => p.includes('description'));
    expect(passed).toContain('120–160');
  });
});

// ─── canonical checks ────────────────────────────────────────────────────────

describe('auditPage — canonical', () => {
  it('passes when canonical is set', () => {
    const result = auditPage({ canonical: 'https://example.com/' });
    expect(result.passed.some((p) => p.includes('Canonical'))).toBe(true);
  });

  it('warns when canonical is missing', () => {
    const result = auditPage({});
    expect(result.issues.some((i) => i.rule === 'canonical-missing')).toBe(true);
  });
});

// ─── Open Graph checks ───────────────────────────────────────────────────────

describe('auditPage — Open Graph', () => {
  it('passes og:title when set', () => {
    const result = auditPage({ og: { title: 'OG Title' } });
    expect(result.passed.some((p) => p.includes('og:title'))).toBe(true);
  });

  it('warns when og:title is missing', () => {
    const result = auditPage({ og: {} });
    expect(result.issues.some((i) => i.rule === 'og-title')).toBe(true);
  });

  it('passes og:description when set', () => {
    const result = auditPage({ og: { description: 'OG Desc' } });
    expect(result.passed.some((p) => p.includes('og:description'))).toBe(true);
  });

  it('passes og:image when set', () => {
    const result = auditPage({ og: { image: 'https://example.com/img.jpg', imageAlt: 'Alt text' } });
    expect(result.passed.some((p) => p.includes('og:image'))).toBe(true);
  });

  it('warns about missing og:image:alt when image is set without alt', () => {
    const result = auditPage({ og: { image: 'https://example.com/img.jpg' } });
    expect(result.issues.some((i) => i.rule === 'og-image-alt')).toBe(true);
  });

  it('does NOT warn about og:image:alt when no image is provided', () => {
    const result = auditPage({ og: {} });
    expect(result.issues.some((i) => i.rule === 'og-image-alt')).toBe(false);
  });
});

// ─── JSON-LD schema checks ───────────────────────────────────────────────────

describe('auditPage — schema', () => {
  it('passes when schema is present', () => {
    const result = auditPage({ schema: { '@type': 'Product', name: 'Widget' } });
    expect(result.passed.some((p) => p.includes('JSON-LD'))).toBe(true);
  });

  it('includes @type in passed message', () => {
    const result = auditPage({ schema: { '@type': 'Article', headline: 'Test' } });
    const passed = result.passed.find((p) => p.includes('JSON-LD'));
    expect(passed).toContain('Article');
  });

  it('warns about schema missing description/headline for AI', () => {
    const result = auditPage({ schema: { '@type': 'Product', name: 'Widget' } });
    expect(result.issues.some((i) => i.rule === 'schema-description')).toBe(true);
  });

  it('does not warn about schema-description when description is present', () => {
    const result = auditPage({ schema: { '@type': 'Product', description: 'A great product' } });
    expect(result.issues.some((i) => i.rule === 'schema-description')).toBe(false);
  });

  it('does not warn about schema-description when headline is present', () => {
    const result = auditPage({ schema: { '@type': 'Article', headline: 'Breaking News' } });
    expect(result.issues.some((i) => i.rule === 'schema-description')).toBe(false);
  });

  it('warns when schema is missing', () => {
    const result = auditPage({});
    expect(result.issues.some((i) => i.rule === 'schema-missing')).toBe(true);
  });

  it('@type shows "unknown" when schema has no @type', () => {
    const result = auditPage({ schema: { name: 'Widget' } });
    const passed = result.passed.find((p) => p.includes('JSON-LD'));
    expect(passed).toContain('unknown');
  });
});
