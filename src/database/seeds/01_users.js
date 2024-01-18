/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "secret456",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "secure789",
    },
    {
      name: "Bob Williams",
      email: "bob.williams@example.com",
      password: "pass123word",
    },
    {
      name: "Eva Davis",
      email: "eva.davis@example.com",
      password: "evaPass987",
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      password: "peanutsRule",
    },
    {
      name: "Grace Miller",
      email: "grace.miller@example.com",
      password: "gracePass789",
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      password: "david1234",
    },
    {
      name: "Olivia White",
      email: "olivia.white@example.com",
      password: "oliviaPass456",
    },
    {
      name: "Michael Turner",
      email: "michael.turner@example.com",
      password: "turnerPass789",
    },
    {
      name: "Sophia Taylor",
      email: "sophia.taylor@example.com",
      password: "sophiaPass123",
    },
    {
      name: "Liam Harris",
      email: "liam.harris@example.com",
      password: "liam4567",
    },
    {
      name: "Emma Clark",
      email: "emma.clark@example.com",
      password: "emmaPass789",
    },
    {
      name: "William Moore",
      email: "william.moore@example.com",
      password: "william1234",
    },
    {
      name: "Ava Martinez",
      email: "ava.martinez@example.com",
      password: "avaPass567",
    },
    {
      name: "James Johnson",
      email: "james.johnson@example.com",
      password: "jamesPass890",
    },
    {
      name: "Isabella Turner",
      email: "isabella.turner@example.com",
      password: "isabella4567",
    },
    {
      name: "Jackson Davis",
      email: "jackson.davis@example.com",
      password: "jacksonPass789",
    },
    {
      name: "Sophie Harris",
      email: "sophie.harris@example.com",
      password: "sophie1234",
    },
    {
      name: "Logan White",
      email: "logan.white@example.com",
      password: "loganPass567",
    },
  ]);
};
