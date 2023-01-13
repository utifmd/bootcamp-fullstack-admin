const router = require("express").Router()
const { storyController } = require("../controller")
const { authentication } = require("../middleware")

router.get("/stories/checkSpace", authentication, storyController.check)
router.post("/stories/add", authentication, storyController.create)
router.delete("/stories/destroy", authentication, storyController.deleteAll)
router.delete("/stories/remove/:userId", authentication, storyController.delete)

module.exports = router