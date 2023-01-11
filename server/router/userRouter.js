const router = require("express").Router()
const { userController } = require("../controller")
const { authentication, fileUploader } = require("../middleware")

router.get("/users", userController.readAll)
router.get("/users/:id", userController.read)
router.get("/users/search/:query", userController.readAllBy)
router.delete(
    "/users/remove", 
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