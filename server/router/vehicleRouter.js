const router = require("express").Router()
const { vehicleController } = require("../controller")

router.get("/vehicles", vehicleController.readAll)
router.get("/vehicles/:id", vehicleController.read)
router.post("/vehicles/add", vehicleController.create)
router.delete("/vehicles/remove/:id", vehicleController.delete)
router.put("/vehicles/update/:id", vehicleController.update)

module.exports = router