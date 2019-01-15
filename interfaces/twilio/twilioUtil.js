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
        SMSMessage.saveFromObj(sentMessage)
            .then(function(thing) {console.log('reached')})
            .catch(function(err) {console.log('reached err')});
        // let msg = await SMSMessage.saveFromObj(sentMessage);
        // console.log('Saved message: ');
        // console.log(msg);
        return "";
    }

    getMessage(sid) {
        return this.client.messages.fetch({
            sid: sid
        })
    }

}

module.exports = TwilioUtil;
