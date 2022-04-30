const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let mail = /@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(mail)[0].slice(1);
}

module.exports = {
  getEmailDomain
};
