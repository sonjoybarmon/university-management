import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { errorLogger, logger } from './shared/logger'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.database_url)

    logger.info(`MongoDB Connected: ${conn.connection.host}`)

    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database', error)
  }
}

connectDB()
