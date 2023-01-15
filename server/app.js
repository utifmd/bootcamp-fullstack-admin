require("dotenv").config()
const path = require("path")
const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./router")
const port = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `*` }))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use("/public", express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})