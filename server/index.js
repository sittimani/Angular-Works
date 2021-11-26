const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/getData", (request, respone) => {
    const headers = request.headers
    const authorization = headers.authorization
    respone.json(authorization)
})

app.listen(3000, () => {
    console.log("listing at 3000");
})