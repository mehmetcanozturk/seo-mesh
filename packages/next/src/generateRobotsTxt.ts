export interface RobotsRule {
  userAgent: string | string[];
  allow?: string | string[];
  disallow?: string | string[];
  crawlDelay?: number;
}

export interface RobotsTxtOptions {
  rules: RobotsRule[];
  sitemap?: string | string[];
  host?: string;
}

export function generateRobotsTxt({ rules, sitemap, host }: RobotsTxtOptions): string {
  const lines: string[] = [];

  for (const rule of rules) {
    const agents = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent];
    for (const agent of agents) lines.push(`User-agent: ${agent}`);

    const allows = rule.allow ? (Array.isArray(rule.allow) ? rule.allow : [rule.allow]) : [];
    const disallows = rule.disallow ? (Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]) : [];

    for (const a of allows) lines.push(`Allow: ${a}`);
    for (const d of disallows) lines.push(`Disallow: ${d}`);
    if (rule.crawlDelay !== undefined) lines.push(`Crawl-delay: ${rule.crawlDelay}`);
    lines.push('');
  }

  if (sitemap) {
    const sitemaps = Array.isArray(sitemap) ? sitemap : [sitemap];
    for (const s of sitemaps) lines.push(`Sitemap: ${s}`);
  }

  if (host) lines.push(`Host: ${host}`);

  return lines.join('\n') + '\n';
}
