const config = require('../../config/config');
const twilio = require('twilio');
const SMSMessage = require('../../models/smsMessage');

const accountSid = config.twilio.auth.sid;
const authToken = config.twilio.auth.token;
const appNumber = config.twilio.appNumber;

class TwilioUtil {

    constructor() {
        this.client = new twilio(accountSid, authToken);
    }

    async sendMessage(user, message) {
        let sentMessage = await this.client.messages.create({
            body: message,
            to: user.smsNumber,
            from: appNumber
        });
        return SMSMessage.saveFromObj(sentMessage);
    }

    getMessage(sid) {
        return this.client.messages.fetch({
            sid: sid
        })
    }

}

module.exports = TwilioUtil;
