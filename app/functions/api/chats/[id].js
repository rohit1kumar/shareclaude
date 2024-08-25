import { drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';
import { chatsSchema } from '../../../database/schema';

export async function onRequestGet(context) {
    const id = context.params.id;
    try {
        const db = drizzle(context.env.DB);
        const [chat] = await db.select().from(chatsSchema).where(eq(chatsSchema.id, id)).limit(1)
        if (!chat) {
            return Response.json({ msg: 'chat not found' }, { status: 404 });
        }

        return Response.json(chat);
    } catch (error) {
        console.log("Error getting a chat: ", error)
        return Response.json({ msg: "something went wrong!" }, { status: 500 });
    }
}