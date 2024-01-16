import * as readline from "readline";
import { execSync } from "child_process";

// create readline interface to get prompt from user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the migration name: ", (migrationName: string) => {
  rl.close();
  execSync(`cd ./src/config && knex migrate:make ${migrationName}`, {
    stdio: "inherit",
  });
});
