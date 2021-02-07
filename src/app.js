import express from 'express'
import api from './routes'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

const corsOptions = {}
// Middlewares
app.use(cors(corsOptions))
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hola mundo'
    })
})
// Routes api
app.use('/api', api)
export default app