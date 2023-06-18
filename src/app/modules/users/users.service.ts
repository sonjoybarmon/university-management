import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

export const createUserDB = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()

  user.id = id as string

  //   DEFAULT PASSWORD
  if (!user.password) {
    user.password = process.env.DEFAULT_USER_PASS as string
  }

  const newUser = await User.create(user)

  if (!newUser) {
    throw new Error('Failed to create user!')
  }

  return newUser
}
