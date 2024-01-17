import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("albums", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.integer("release_year");
    table.string("genre");
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });

  await knex.schema.createTable("album_artists", (table) => {
    table.increments("id").primary();
    table
      .integer("album_id")
      .unsigned()
      .references("id")
      .inTable("albums")
      .onDelete("CASCADE");
    table
      .integer("artist_id")
      .unsigned()
      .references("id")
      .inTable("artists")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("album_artists");
  await knex.schema.dropTableIfExists("albums");
}
