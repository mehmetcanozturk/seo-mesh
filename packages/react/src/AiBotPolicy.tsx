import type { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type KnownBot = 'GPTBot' | 'Google-Extended' | 'CCBot' | 'ClaudeBot'
  | 'anthropic-ai' | 'PerplexityBot' | 'cohere-ai' | 'Amazonbot'
  | 'Applebot-Extended' | 'Bytespider' | 'DuckAssistBot' | (string & {});

interface AiBotPolicyProps {
  deny?: KnownBot[];
  allow?: KnownBot[];
  noAiImages?: boolean;
}

export function AiBotPolicy({ deny, allow, noAiImages }: AiBotPolicyProps): ReactNode {
  const tags: ReactNode[] = [];

  if (deny) {
    for (const bot of deny) {
      tags.push(<meta key={`deny-${bot}`} name={bot} content="noindex" />);
    }
  }

  if (allow) {
    // Deny all AI bots except those explicitly allowed
    const allKnown: KnownBot[] = [
      'GPTBot', 'Google-Extended', 'CCBot', 'ClaudeBot', 'anthropic-ai',
      'PerplexityBot', 'cohere-ai', 'Amazonbot', 'Applebot-Extended',
      'Bytespider', 'DuckAssistBot',
    ];
    for (const bot of allKnown) {
      if (!allow.includes(bot)) {
        tags.push(<meta key={`deny-${bot}`} name={bot} content="noindex" />);
      }
    }
  }

  if (noAiImages) {
    tags.push(<meta key="noimageai" name="robots" content="noimageai" />);
  }

  return <>{tags}</>;
}
