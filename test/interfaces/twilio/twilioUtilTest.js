let chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const TwilioUtil = require('../../../interfaces/twilio/twilioUtil');

chai.use(chaiAsPromised).should();

describe('TwilioUtil Interface test', () => {
    it('sendMessage test', () => {
        let twilioUtil = new TwilioUtil();
        let user = { smsNumber: '+15634519000' };
        twilioUtil.sendMessage(user, 'TwilioUtil Interface test')
            .should.be.fulfilled;
    })
});
