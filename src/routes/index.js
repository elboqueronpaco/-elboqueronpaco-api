import { Router } from 'express'
import userRouter from './user'

const api = Router()
api.use('/users', userRouter)

export default api