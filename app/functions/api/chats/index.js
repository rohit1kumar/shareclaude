const chats = [
    {
        "id": 1,
        "source": "user",
        "message": "Hi"
    },
    {
        "id": 2,
        "source": "claude",
        "message": "Hello! How can I assist you today?"

    }]

export async function onRequestGet(context) {
    return Response.json(chats, { status: 200 });
}

export async function onRequestPost(context) {
    const body = await context.request.json();
    chats.push(body);
    return Response.json(chats, { status: 201 });
}