const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const SPEED_REACTION = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    !+sampleActivity || typeof sampleActivity !== 'string' || isNaN(+sampleActivity) || Math.sign(+sampleActivity) === -1
  ) {
    return false;
  } else {
    let age = Math.ceil(
      Math.log(MODERN_ACTIVITY / +sampleActivity) / SPEED_REACTION
    );
    if (Math.sign(+age) === -1) {
      return false;
    } else {
      return age;
    }
  }
}

module.exports = {
  dateSample
};
