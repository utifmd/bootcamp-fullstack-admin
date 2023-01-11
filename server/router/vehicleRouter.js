const router = require("express").Router()
const { vehicleController } = require("../controller")
const { authentication, fileUploader } = require("../middleware")

router.get("/vehicles", vehicleController.readAll)
router.get("/vehicles/:id", vehicleController.read)
router.get("/vehicles/search/:query", vehicleController.readAllBy)
router.delete("/vehicles/remove/:id", authentication, vehicleController.delete)
router.post(
    "/vehicles/add", 
    authentication, 
    fileUploader,
    vehicleController.create
)
router.put(
    "/vehicles/update/:id", 
    authentication, 
    fileUploader,
    vehicleController.update
)
module.exports = router