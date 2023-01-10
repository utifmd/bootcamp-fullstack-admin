const router = require("express").Router()
const { authController } = require("../controller")

router.post("/auth/signin", authController.read)
router.post("/auth/register", authController.create)
router.put("/auth/change/:id", authController.update)

module.exports = router