import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
// const port = 4000;

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: any) => {
  res.send(`khela shuru`)
})

export default app
