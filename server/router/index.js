const router = require("express").Router()
const vehicleRouter = require("./vehicleRouter")
const userRouter = require("./userRouter")
const authRouter = require("./authRouter")
const historyRouter = require("./historyRouter")
const storyRouter = require("./storyRouter")

router.use(vehicleRouter)
router.use(userRouter)
router.use(authRouter)
router.use(historyRouter)
router.use(storyRouter)
router.get("/", (req, resp) => {
    resp.json("hello world")
})
module.exports = router