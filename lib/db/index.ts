import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

declare global {
  // eslint-disable-next-line no-var
  var __dbClient: postgres.Sql | undefined;
}

// Reuse the connection across hot reloads / lambda invocations instead of
// opening a new pool on every import.
const client =
  global.__dbClient ??
  postgres(process.env.DATABASE_URL ?? "", { max: 1, prepare: false });

if (process.env.NODE_ENV !== "production") {
  global.__dbClient = client;
}

export const db = drizzle(client, { schema });
