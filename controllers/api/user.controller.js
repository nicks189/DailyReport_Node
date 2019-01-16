const User = require('../../models/user');

/**
 * Add user
 * @param req
 * @param res
 * @param next
 */
module.exports.add = (req, res, next) => {
    User.saveFromObj(req.body)
        .then((user) => res.json({ user: user.toAuthResponse() }))
        .catch(next);
};

/**
 * Fetch user
 * @param req
 * @param res
 * @param next
 */
module.exports.fetch = (req, res, next) => {
    console.log(req.params.email);
    User.findByEmail(req.params.email)
        .then((user) => res.json({ user: user.toAuthResponse() }))
        .catch(next);
};

/**
 * Update user
 * @param req
 * @param res
 * @param next
 */
module.exports.update = (req, res, next) => {
    User.findByEmail(req.params.email)
        .then((user) => {
            user.updateFromObj(req.body)
                .then((user) => res.json({ user: user.toAuthResponse() }))
                .catch(next);
        })
        .catch(next);
};

/**
 * Delete user
 * @param req
 * @param res
 * @param next
 */
module.exports.delete = (req, res, next) => {
    User.deleteByEmail(req.params.email)
        .then(() => res.json({ message: 'User with email ' + req.params.email + ' deleted.' }))
        .catch(next)
};
