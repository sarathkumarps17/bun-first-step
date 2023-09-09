
const port = Bun.env.PORT
Bun.serve({
    port,
    async fetch(req: Request) {
        console.log(req.method)
        return new Response('Hi this is bun API')
    }
})
console.log(`Bun server is running on ${port}`)