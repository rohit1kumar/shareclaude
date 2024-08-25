export async function onRequest(context) {
    return Response.json({ message: "Opps! This route does not exist." }, { status: 404 });
}