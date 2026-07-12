import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
} from "node:fs";
import { dirname, join } from "node:path";

const policyRoot = join(process.cwd(), "dist", "policy");

if (!existsSync(policyRoot)) {
  process.exit(0);
}

let written = 0;

for (const entry of readdirSync(policyRoot)) {
  const source = join(policyRoot, entry, "index.html");
  const target = join(policyRoot, `${entry}.html`);

  if (!statSync(join(policyRoot, entry)).isDirectory() || !existsSync(source)) {
    continue;
  }

  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
  written += 1;
}

console.log(`Wrote ${written} policy .html aliases.`);
