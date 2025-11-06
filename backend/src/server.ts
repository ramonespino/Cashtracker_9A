import express from 'express' 
import colors from 'colors'
import morgan from 'morgan'

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.green.bold('Base de datos conectada'))   
    } catch (error) {
        console.log(colors.red.bold('No se pudo conectar a la base de datos:'))
    }
    }                   





const app = express()

app.use(morgan('dev'))

app.use(express.json())



export default app
