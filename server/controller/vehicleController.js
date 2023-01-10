class Controller {
    static readAll(req, resp) {
        resp.json("vehicle readAll")
    }
    static read(req, resp) {
        resp.json("vehicle read")
    }
    static create(req, resp) {
        console.log("vehicle create")
        resp.json(req.body)
    }
    static delete(req, resp) {
        resp.json("vehicle delete")
    }
    static update(req, resp) {
        console.log(`vehicle update ${req.params.id}`)
        resp.json(req.body)
    }
}
module.exports = Controller