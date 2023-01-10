const router = require("express").Router()
const { vehicleController } = require("../controller")
const { authentication } = require("../middleware")

router.get("/vehicles", vehicleController.readAll)
router.get("/vehicles/:id", vehicleController.read)
router.post("/vehicles/add", authentication, vehicleController.create)
router.delete("/vehicles/remove/:id", authentication, vehicleController.delete)
router.put("/vehicles/update/:id", authentication, vehicleController.update)

module.exports = router