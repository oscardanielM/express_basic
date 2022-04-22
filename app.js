
//Objeto express
const express = require("express")

//App de Express
const app = express();

//Puerto en que vamos a trabajar por default es 3000
const port = 3000;

// path inicial, responderá a la url localhost:3000

app.get('/', (req, res, next) => {
    res.send("Hello word!")
})

app.get('/launchx', (req, res, next) => {
    res.send("Bienvenidos a launchx")
})

//Regresando un objeto
// localhost:3000

app.get("/explorersInNode", (req, res, next) => {
    const explorer = {name:"Explorer", msj:"Hello"}
    res.send(explorer)
})

app.get("/explorers/:explorerName", (req, res, next) => {
    const explorer = {name:"Explorer", msj:"Hello"}
    res.send(req.params)
})

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log("Example app listenig on port:" + port)
})