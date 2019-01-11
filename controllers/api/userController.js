const User = require('../../models/user');

/**
 * Add user
 * @param req
 * @param res
 * @param next
 */
module.exports.add = (req, res, next) => {
    let user = new User();
    console.log(req.body.name);
    user.name = req.body.name;
    user.email = req.body.email;
    user.smsNumber = req.body.smsNumber;
    user.twitterHandle = req.body.twitterHandle;
    user.save().then(() => {
        res.json({ user: user.toResponseJSON() });
    }).catch(next);
};