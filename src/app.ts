//to run : node filename.js
import express, { Application, Request, Response } from 'express'
import userRoute from './app/modules/users/users.route'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'

const app: Application = express()
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cors
app.use(cors())

// application routes
app.use('/api/v1/users', userRoute)

app.get('/', (req: Request, res: Response) => {
  //   throw new ApiError(400, 'Custom Error')
  res.send('Hello World')
})

// global error handler
app.use(globalErrorHandler)

export default app
