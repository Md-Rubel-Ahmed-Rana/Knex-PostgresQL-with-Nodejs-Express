import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("songs", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.integer("duration");
    table
      .integer("album_id")
      .unsigned()
      .references("id")
      .inTable("albums")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("songs");
}
