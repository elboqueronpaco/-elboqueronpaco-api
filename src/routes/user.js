import { Router } from 'express'

const userRouter = Router()
userRouter.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        data: 'usuarios'
    })
})
userRouter.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({
        ok: true,
        data: `usuario ${id}`
    })
})
userRouter.post('/', (req, res) =>{
    const data = req.body
    res.json({
        ok: true,
        data
    })
})

userRouter.put('/:id', (req, res) => {
    const id = req.params.id
    res.json({
        ok: true,
        data: `actualizado usuario ${id}`
    })
})
userRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({
        ok: true,
        data: `Eliminar usuario ${id}`
    })
})

export default userRouter