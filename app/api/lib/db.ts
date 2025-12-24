import { Pool } from "pg";

export const pool = new Pool({
    connectionString: "postgres://app_user:123456@localhost:5432/app_db"
});
