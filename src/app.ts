import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRoute from './app/modules/users/users.route'
// const port = 4000;

app.use(cors())

// application route
app.use('/api/v1/users/', usersRoute)

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  res.send(`khela shuru`)
})

export default app
