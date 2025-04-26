import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes'
import { errorHandler } from './middlewares/error.middleware'
import customerRouter from './routes/customer.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api', customerRouter) 
app.use(errorHandler)

export default app
