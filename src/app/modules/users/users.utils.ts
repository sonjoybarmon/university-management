import { User } from './users.model'

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastStudent?.id ? lastStudent.id.substring(4) : undefined
}

export const generateUserId = async () => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0')

  // increment
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  return incrementId
}
