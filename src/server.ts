import { connectDB } from './config/db'
import app from './app'
import { env } from './config/env'

connectDB().then(() => {
  app.listen(env.PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${env.PORT}`)
  })
})
