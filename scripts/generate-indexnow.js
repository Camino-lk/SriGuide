import { writeFileSync } from "fs";

const key = process.env.INDEXNOW_KEY;

if (!key) {
  console.log("INDEXNOW_KEY not set, skipping IndexNow file generation");
  process.exit(0);
}

writeFileSync(`dist/${key}.txt`, key, "utf8");

console.log("IndexNow file generated successfully");
