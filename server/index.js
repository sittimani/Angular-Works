const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

let hero = [{
    name: "Iron Man",
    power: "Brain"
}, {
    name: "Captain America",
    power: "Super human strength"
}]

app.get("/hero-list", (request, response) => {
    response.send(hero)
})

app.post("/save-hero", (request, response) => {
    hero.push(request.body)
    response.json("Successfully added").status(200)
})

app.listen(3000, () => {
    console.log(`server running at 3000`);
})