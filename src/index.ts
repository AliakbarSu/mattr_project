import express from 'express'
const app = express()
import dotenv from 'dotenv'
import router from './routes'

dotenv.config()

app.listen(3000)
