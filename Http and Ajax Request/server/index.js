const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

let heros = [{
    name: "RDJ",
    power: "Brain",
    timeStamp: "2021-12-03T08:56:29.292Z"
}]

app.get("/get-heros", (request, response) => {
    response.status(404).json(heros)
})

app.post("/add-hero", (request, response) => {
    heros.push(request.body)
    response.status(200).json({
        authorization: request.headers.authorization,
        result: "Successfully hero added"
    })
})

app.put("/modify-hero", (request, response) => {
    const index = heros.findIndex((hero) => {
        return hero.name === request.body.name && hero.power !== request.body.power
    })
    heros[index] = request.body
    response.status(200).json("Hero List updated")
})

app.delete("/delete-hero/:id", (request, response) => {
    const index = heros.findIndex((hero) => {
        return hero.name === request.params.id
    })
    heros.splice(index, 1)
    response.status(200).json("deleted Successfully")
})


app.listen(3000, () => {
    console.log(`server running at 3000`);
})