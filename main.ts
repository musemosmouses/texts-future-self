import { mkdirSync, writeFileSync } from "node:fs";

// A future self texting back about read receipts: five years on, mum still
// logs every minute between "seen" and the reply in a spreadsheet — and the
// future self has read it. One line, 152 characters, no setup needed.
const message =
  "Future you here. Turn off read receipts. In 2031 your mum still counts the minutes between 'seen' and your reply. She keeps a spreadsheet. I've seen it.";

// The gate allows 1 to 200 characters, so refuse loudly rather than ever
// shipping an over-long line: the entry must stay inside the cap by design.
if (message.length > 200) {
  throw new Error(`entry is ${message.length} characters, over the 200 cap`);
}

// The program writes exactly that one line, deterministically: no clock,
// no randomness, no network, no reading of anything before the write.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, message, "utf8");
