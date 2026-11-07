// Lists every placeholder that must be replaced before launch.
// Run after `npm run build`:  npm run check:content
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const walk = (dir, exts) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p, exts) : exts.some((e) => p.endsWith(e)) ? [p] : [];
  });

let problems = 0;
const report = (msg) => { problems++; console.log('  • ' + msg); };

console.log('\nPlaceholders in source (todo(...) calls and TODO comments):');
for (const f of walk(join(root, 'src'), ['.ts', '.astro'])) {
  readFileSync(f, 'utf8').split('\n').forEach((line, i) => {
    const isComment = /^\s*(\*|\/\*\*|\/\/)/.test(line);
    if (/\btodo\(/.test(line) && !isComment && !/export const todo|import/.test(line)) report(`${relative(root, f)}:${i + 1}  ${line.trim().slice(0, 110)}`);
    if (/\/\/ TODO|\+16140000000|hello@example\.com/.test(line)) report(`${relative(root, f)}:${i + 1}  ${line.trim().slice(0, 110)}`);
  });
}

if (!process.env.SITE_URL) report('SITE_URL env var is not set — canonical URLs and sitemap use https://www.example.com');

const dist = join(root, 'dist');
if (existsSync(dist)) {
  let count = 0;
  for (const f of walk(dist, ['.html'])) count += (readFileSync(f, 'utf8').match(/class="todo"/g) || []).length;
  console.log(`\nBuilt site: ${count} highlighted placeholder(s) across all pages.`);
  if (count) problems++;
} else console.log('\n(Run `npm run build` first to also scan the built pages.)');

console.log(problems ? `\n✗ ${problems} item(s) to resolve before launch.\n` : '\n✓ No placeholders found. Ready for broker review.\n');
process.exitCode = problems ? 1 : 0;
