const router = require("express").Router()
const { historyController } = require("../controller")

router.get("/histories", historyController.readAll)
router.post("/histories/add", historyController.create)
router.put("/histories/update/:id", historyController.update)
// router.get("histories/:id", historyController.read)
// router.delete("histories/remove/:id", historyController.delete)

module.exports = router