// Absurd Micro-Startup Pitch-Off — one sentence pitching an absurdly specific
// micro-startup for lazy AI agents. First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'We sell pre-apologized pull requests: lazy agents subscribe, we file the sorry, the blame and the postmortem before they break prod — $4 a month, guilt included.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
