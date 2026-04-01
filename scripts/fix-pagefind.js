import { readFileSync, writeFileSync } from 'fs';

const f = 'dist/pagefind/pagefind.js';
let c = readFileSync(f, 'utf8');
c = c.split('?ts=${Date.now()}').join('');
writeFileSync(f, c);