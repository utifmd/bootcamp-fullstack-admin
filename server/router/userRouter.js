const router = require("express").Router()
const { userController } = require("../controller")
const { authentication, fileUploader } = require("../middleware")

router.get("/users", userController.readAll)
router.get("/users/search/:query", userController.readAllBy)
router.get("/users/:id", authentication, userController.readBy)
router.get("/user", authentication, userController.read)
router.delete(
    "/users/remove/:id", 
    authentication,
    userController.delete
)
router.put(
    "/users/update", 
    authentication, 
    fileUploader,
    userController.update
)
module.exports = router