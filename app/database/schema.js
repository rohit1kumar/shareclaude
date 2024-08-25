import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from "drizzle-orm";
import { createId } from '@paralleldrive/cuid2';

export const chatsSchema = sqliteTable('chats', {
    id: text('id').$defaultFn(() => createId()).primaryKey(),
    title: text('title', { length: 512 }).notNull(),
    content: text('content', { mode: 'json' }),
    timestamp: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`),
})