const mongoose = require('mongoose');

let SMSMessageSchema = mongoose.Schema({
    body: {
        type: String,
        trim: true
    },
    dateCreated: {
        type: String,
        trim: true
    },
    dateSent: {
        type: String,
        trim: true
    },
    dateUpdated: {
        type: String,
        trim: true
    },
    errorCode: {
        type: String,
        trim: true
    },
    errorMessage: {
        type: String,
        trim: true
    }
});

let SMSMessage = mongoose.model('sms_message', SMSMessageSchema);
module.exports = SMSMessage;