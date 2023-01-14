const multer = require("multer")
const path = require("path")
const { Message } = require("../models")

const storage = multer.diskStorage({
    destination: (req, file, listener) => {
        listener(null, `./public/img/uploads`)
    },
    filename: (req, file, listener) => {
        let filename = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        listener(null, filename)
    }
})
const upload = multer({ storage }).single("image")

const uploader = async (req, resp, next) => {
    return await upload(req, resp, function (err) {
        const host = req.protocol + "://" + req.get("host")
        console.log(req.file)
        if (!req.file) {
            console.log("no file is selected")
            next()
            return
        }
        const filePath = req.file.path
        let url = `${host}/${filePath}`
        console.log(`uploaded to ${url}`)
        // resp.locals.imageUrl = url
        req.body.imageUrl = url // not recomended
        if (err) {
            console.log("multer error", err)
            resp.status(400).send(new Message(err))
        }
        next()
    })
}
module.exports = uploader