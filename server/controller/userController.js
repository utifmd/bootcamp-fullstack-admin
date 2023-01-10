class Controller {
    static readAll(req, resp) {
        resp.json("user readAll")
    }
    static read(req, resp) {
        resp.json("user read")
    }
    static delete(req, resp) {
        resp.json("user delete")
    }
    static update(req, resp) {
        resp.json("user update")
    }
}
module.exports = Controller