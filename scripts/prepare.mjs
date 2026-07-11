import { execFileSync } from "node:child_process";

try {
  execFileSync("npx", ["husky"], { stdio: "inherit", shell: process.platform === "win32" });
} catch {
  console.warn("Husky setup skipped: Git metadata is unavailable or read-only.");
}
