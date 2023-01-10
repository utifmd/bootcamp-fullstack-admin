const router = require("express").Router()
const { userController } = require("../controller")

router.get("/users", userController.readAll)
router.get("/users/:id", userController.read)
router.delete("/users/remove/:id", userController.delete)
router.put("/users/update/:id", userController.update)

module.exports = router