require("dotenv").config()
const express = require("express")
const app = express()
const router = require("./router")
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})