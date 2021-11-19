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

app.get("/hero-list", verifyUser, (request, response) => {
    setTimeout(() => {
        response.send(hero)
    }, 3000)

})

app.post("/save-hero", (request, response) => {
    hero.push(request.body)
    response.json("Successfully added").status(200)
})

function verifyUser(request, response, next) {
    const header = request.headers.authorization
    if (header !== "123")
        response.status(401).json("Error")
    next()
}

app.listen(3000, () => {
    console.log(`server running at 3000`);
})