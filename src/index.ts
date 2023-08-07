import express, { Request, Response } from 'express'
const app = express()
import dotenv from 'dotenv'
import router from './routes'

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/api/', router)

app.use((err: Error, req: Request, res: Response, next: unknown) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

dotenv.config()

app.listen(3000)
