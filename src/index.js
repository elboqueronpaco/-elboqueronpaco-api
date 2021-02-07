import './config'
import app from "./app";


const port = 4000

app.listen(process.env.PORT)
console.log(`server at http://localhost:${process.env.PORT}`)