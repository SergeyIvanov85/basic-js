const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};
  let array = [];
  domains.map((item) => {
    array.push(item.split('.').reverse());
  });

  array.forEach((item) => {
    let name = '.' + item[0];

    for (let i = 0; i <= array.length; i++) {
      if (!name.includes('undefined')) {
        if (name in object) {
          ++object[name];
        } else {
          object[name] = 1;
        }

        name += '.' + item[i + 1];
      }
    }
  });

  return object;
}

module.exports = {
  getDNSStats
};
