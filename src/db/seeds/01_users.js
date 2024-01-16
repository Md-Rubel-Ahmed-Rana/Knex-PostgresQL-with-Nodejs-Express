/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { id: 1, name: "Rubel", email: "rubel@gmail.com" },
    { id: 2, name: "Mohin", email: "mohin@gmail.com" },
    { id: 3, name: "Fahim", email: "fahim@gmail.com" },
    { id: 4, name: "Rofik", email: "rofik@gmail.com" },
    { id: 5, name: "Rana", email: "rana@gmail.com" },
  ]);
};
