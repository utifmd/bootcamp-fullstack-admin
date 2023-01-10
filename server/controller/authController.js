class Controller {
    static read(req, resp) {
        console.log("auth read")
        resp.json(req.body)
    }
    static create(req, resp) {
        resp.json(req.body)
    }
    static update(req, resp) {
        const id = req.params.id
        console.log(`auth update ${id}`)
        resp.json(req.body)
    }
}
module.exports = Controller