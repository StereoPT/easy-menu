import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mailListAddress = process.env.MAILGUN_MAILLIST || 'dummy';

const mg = mailgun.client({
  username: 'API',
  key: process.env.MAILGUN_API_KEY || 'dummy',
});

export const addToMailList = async (email: string) => {
  await mg.lists.members.createMember(mailListAddress, {
    address: email,
  });
};
