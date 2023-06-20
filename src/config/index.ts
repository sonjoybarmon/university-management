import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 8000,
  database_url: process.env.DATABASE_URL || '',
  default_user_pass: process.env.DEFAULT_USER_PASS,
}

export default config
