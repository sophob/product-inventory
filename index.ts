import express, { Response, Request } from 'express';

const app = express()
const PORT = process.env.PORT

app.get("/", (req: Request, res: Response) => {
    res.send({ hello: "world!" })
})

app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})
