const router = require("express").Router()
const { authentication } = require("../middleware")
const { authController } = require("../controller")

router.post("/auth/signin", authController.read)
router.post("/auth/register", authController.create)
router.put("/auth/change", authentication, authController.update)
router.get("/auth", authentication, authController.readBy)
router.put("/auth/edit", authentication, authController.updateBy)

module.exports = router