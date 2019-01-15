let chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const TwilioUtil = require('../../../interfaces/twilio/twilioUtil');

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('TwilioUtil Interface test', () => {
    it('sendMessage test', () => {
        let twilioUtil = new TwilioUtil();
        let user = { smsNumber: '+15634519000' };
        // expect(twilioUtil.sendMessage(user, 'TwilioUtil Interface test'))
        //     .to.eventually.have.property('body').equal('TwilioUtil Interface test');
        twilioUtil.sendMessage(user, 'blah')
            .then((msg) => console.log(msg))
            .catch((err) => console.log(err))
    })
});
