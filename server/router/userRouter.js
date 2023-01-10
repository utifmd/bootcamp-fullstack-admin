const router = require("express").Router()
const { userController } = require("../controller")
const { authentication } = require("../middleware")

router.get("/users", userController.readAll)
router.get("/users/:id", userController.read)
router.delete("/users/remove/:id", authentication, userController.delete)
router.put("/users/update/:id", authentication, userController.update)

module.exports = router