import express from 'express'
const app = express()
import dotenv from 'dotenv'
import router from './routes'

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/api/', router)

dotenv.config()

app.listen(3000)
