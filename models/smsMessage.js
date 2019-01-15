const mongoose = require('mongoose');

let SMSMessageSchema = mongoose.Schema({
    sid: {
        type: String,
        trim: true,
        unique: true
    },
    from: {
        type: String,
        trim: true
    },
    to: {
        type: String,
        trim: true
    },
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

SMSMessageSchema.statics.saveFromObj = function(obj) {
    let smsMessage = new this();
    smsMessage.sid = obj.sid;
    smsMessage.from = obj.from;
    smsMessage.to = obj.to;
    smsMessage.body = obj.body;
    smsMessage.dateCreated = obj.dateCreated;
    smsMessage.dateSent = obj.dateSent;
    smsMessage.dateUpdated = obj.dateUpdated;
    smsMessage.errorCode = obj.errorCode;
    smsMessage.errorMessage = obj.errorMessage;
    console.log('smsMessage: ');
    console.log(smsMessage);
    return smsMessage.save();
};

const SMSMessage = mongoose.model('sms_message', SMSMessageSchema);
module.exports = SMSMessage;