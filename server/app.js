require("dotenv").config()
const express = require("express")
const app = express()

const port = process.env.PORT || 5000
app.use(express.urlencoded({extended: true}))
app.get("/", (req, resp) => {
    resp.json("hello world")
})
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})