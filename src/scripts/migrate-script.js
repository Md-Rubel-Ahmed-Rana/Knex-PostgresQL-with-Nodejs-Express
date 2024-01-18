const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the migration name: ", (migrationName) => {
  rl.close();
  require("child_process").execSync(
    `cd ./src/database/ && knex migrate:make ${migrationName}`,
    { stdio: "inherit" }
  );
});
