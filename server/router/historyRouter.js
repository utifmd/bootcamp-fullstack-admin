const router = require("express").Router()
const { historyController } = require("../controller")
const { authentication } = require("../middleware")

router.get("/histories", historyController.readAll)
router.post("/histories/add", authentication, historyController.create)
router.put("/histories/update/:historyId/:targetUserId", authentication, historyController.update)
router.get("/histories/range/:dateStart/:dateEnd", historyController.readAllByDateRange)

// router.get("histories/:id", historyController.read)
// router.delete("histories/remove/:id", historyController.delete)

module.exports = router