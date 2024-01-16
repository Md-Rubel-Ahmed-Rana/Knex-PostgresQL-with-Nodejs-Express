const readline = require("readline");

// create readline interface  to get prompt from user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the migration name: ", (migrationName) => {
  rl.close();
  require("child_process").execSync(
    `cd ./src/config && knex migrate:make ${migrationName}`,
    { stdio: "inherit" }
  );
});
