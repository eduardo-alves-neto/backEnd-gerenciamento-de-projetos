import mongoose from 'mongoose'
import { env } from './env'

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI)
    console.log('🟢 Conectado ao MongoDB')
  } catch (error) {
    console.error('🔴 Erro ao conectar no MongoDB', error)
    process.exit(1)
  }
}