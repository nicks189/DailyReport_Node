const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    // todo: make unique?
    smsNumber: {
        type: String,
        trim: true
    },
    twitterHandle: {
        type: String,
        trim: true
    }
});

UserSchema.statics.saveFromObj = function(obj) {
    let user = new this();
    user.name = obj.name;
    user.email = obj.email;
    user.smsNumber = obj.smsNumber;
    user.twitterHandle = obj.twitterHandle;
    console.log(user);
    return user.save();
};

UserSchema.statics.findByEmail = function(email) {
    return new Promise((resolve, reject) => {
        User.findOne({ email: email })
            .then((user) => {
                if (!user) {
                    reject(new Error("No user found with email " + email));
                }
                resolve(user);
            })
    })
};

UserSchema.methods.toAuthResponse = function() {
    return {
        token: this._id,
        name: this.name,
        email: this.email,
        smsNumber: this.smsNumber,
        twitterHandle: this.twitterHandle
    }
};

UserSchema.methods.updateFromObj = function(obj) {
    let user = this;
    if (typeof obj.name !== 'undefined') {
        user.name = obj.name;
    }
    if (typeof obj.email !== 'undefined') {
        user.email = obj.email;
    }
    if (typeof obj.smsNumber !== 'undefined') {
        user.smsNumber = obj.smsNumber;
    }
    if (typeof obj.twitterHandle !== 'undefined') {
        user.twitterHandle = obj.twitterHandle;
    }
    return user.save();
};

const User = mongoose.model('user', UserSchema);
module.exports = User;