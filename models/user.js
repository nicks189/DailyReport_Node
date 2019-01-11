const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)

let UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    smsNumber: {
        type: String,
        trim: true
    },
    twitterHandle: {
        type: String,
        trim: true
    }
});

UserSchema.methods.toResponseJSON = function() {
    return {
        token: this._id,
        name: this.name,
        email: this.email,
        smsNumber: this.smsNumber,
        twitterHandle: this.twitterHandle
    }
};

let User = mongoose.model('user', UserSchema);
module.exports = User;