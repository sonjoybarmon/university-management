import { RequestHandler } from 'express'
import { createUserDB } from './users.service'

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body

    const result = await createUserDB(user)

    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
