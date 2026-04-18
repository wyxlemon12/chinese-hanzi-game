import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const outputPath = resolve(root, 'artifacts', 'debug-summary.md');
mkdirSync(dirname(outputPath), { recursive: true });

const sections = [];

sections.push('# Craft Debug Summary');
sections.push('');
sections.push(`- Workflow: ${process.env.GITHUB_WORKFLOW ?? 'local-run'}`);
sections.push(`- Job: ${process.env.GITHUB_JOB ?? 'local-job'}`);
sections.push(`- Ref: ${process.env.GITHUB_REF_NAME ?? 'local'}`);
sections.push(`- SHA: ${process.env.GITHUB_SHA ?? 'local'}`);
sections.push('');

const failureStep = process.env.FAILURE_STEP ?? 'unknown';
sections.push(`## Failure Step`);
sections.push('');
sections.push(`The first failing stage was \`${failureStep}\`.`);
sections.push('');

const suggestions = {
  coding: [
    'Re-run `npm run lint` and `npm run typecheck` locally.',
    'Look for import path errors, React Hooks rule violations, and TypeScript shape mismatches.',
  ],
  testing: [
    'Re-run `npm run test:ci` locally.',
    'Check recently changed lesson flow, progress store, and component tests for regressions.',
  ],
  build: [
    'Re-run `npm run build` locally.',
    'Check Vite config, unresolved imports, and browser-only APIs executed during build.',
  ],
  unknown: [
    'Inspect the uploaded logs first.',
    'Re-run the full local verification set: `npm run test:ci`, `npm run typecheck`, `npm run lint`, `npm run build`.',
  ],
};

sections.push('## Suggested Fix Path');
sections.push('');
for (const line of suggestions[failureStep] ?? suggestions.unknown) {
  sections.push(`- ${line}`);
}
sections.push('');

const logTargets = [
  { label: 'Coding log', path: resolve(root, 'artifacts', 'logs', 'coding.log') },
  { label: 'Testing log', path: resolve(root, 'artifacts', 'logs', 'testing.log') },
  { label: 'Build log', path: resolve(root, 'artifacts', 'logs', 'build.log') },
];

sections.push('## Log Excerpts');
sections.push('');

for (const target of logTargets) {
  if (!existsSync(target.path)) {
    continue;
  }

  const content = readFileSync(target.path, 'utf8').trim();
  const excerpt = content.split(/\r?\n/).slice(-20).join('\n');
  sections.push(`### ${target.label}`);
  sections.push('');
  sections.push('```text');
  sections.push(excerpt || '(empty)');
  sections.push('```');
  sections.push('');
}

writeFileSync(outputPath, `${sections.join('\n')}\n`, 'utf8');
console.log(`Wrote debug summary to ${outputPath}`);
