import { drizzle } from 'drizzle-orm/d1';
import { chatsSchema } from '../../../database/schema';

export async function onRequestGet() {
    return new Response('welcome to Claudeshare 🚀, powered by React, Drizzle ORM, and D1, running on Cloudflare Workers');
}

export async function onRequestPost(context) {
    const db = drizzle(context.env.DB);
    try {
        const { title, content } = await context.request.json();
        console.log({ title, content })
        if (!title.trim()) {
            return Response.json({ msg: 'title is required' }, { status: 400 });
        }
        return Response.json({
            id: newChat.id,
        }, { status: 201 });
    } catch (error) {
        // console.log("Error creating chat: ", error)
        return Response.json({ msg: "something went wrong!" }, { status: 500 });
    }
}
