/**
 * Barebones test API
 * @param req
 * @param res
 * @param next
 */
module.exports.getHello = (req, res, next) => {
    res.json({ message: "Hello, World!" });
};