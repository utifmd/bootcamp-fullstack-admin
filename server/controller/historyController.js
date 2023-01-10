class Controller {
    static readAll(req, resp) {
        resp.json("history readAll")
    }
    static create(req, resp) {
        resp.json("history create")
    }
    static update(req, resp) {
        resp.json("history update")
    }
}
module.exports = Controller