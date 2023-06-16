import { Request, Response } from 'express'
import { createUserDB } from './users.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body

    const result = await createUserDB(user)

    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to create user',
    })
  }
}