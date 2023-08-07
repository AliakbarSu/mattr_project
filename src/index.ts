import express from 'express'
const app = express()
import router from './routes'

app.use('/', router)

app.listen(3000)
