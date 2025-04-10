import fs from "fs";
import path from "path";
import { exec } from "child_process";

const DIRECTORY_PATH = "./src/models";

fs.watch(DIRECTORY_PATH, { recursive: true }, (eventType, filename) => {
  if (filename) {
    const filePath = path.join(DIRECTORY_PATH, filename);
    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isFile()) {
        console.log(`File saved: ${filename} (${eventType})`);
        exec("npm run generate:types", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }
          console.log(stdout);
        });
      }
    });
  }
});

console.log(`[PayloadCMS] Watching for file saves in ${DIRECTORY_PATH}...`);
