// The One-Liner Groan-Off — entry program.
// Writes one original one-line dad joke to /output/entry.txt.
// Final joke: a flamingo one-foot pun — setup and twist inside a single line.
const JOKE =
  "My wife said stop acting like a flamingo, so I put my foot down.";

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
