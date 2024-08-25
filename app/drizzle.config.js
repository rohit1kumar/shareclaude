import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    schema: "./database/schema.js",
    dialect: 'sqlite',
    out: "./database/migrations",
})