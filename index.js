const express = require('express')
const app = express()
const cors = require('cors')
const { getEventos, deleteEventos } = require('./consultas')

app.listen(3000, console.log("Servidor Encendido"))
app.use(cors())
app.use(express.json())

app.get("/eventos", async (req, res) => {
    try {
        const eventos = await getEventos()
        res.json(eventos)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})