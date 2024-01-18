const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the seed name: ", (seedName) => {
  rl.close();
  require("child_process").execSync(
    `cd ./src/database/ && npx knex seed:make ${seedName}`,
    { stdio: "inherit" }
  );
});
