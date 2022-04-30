const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  var n = [];

  for (var i = 0; i < names.length; i++) {
    var max = 0;
    var m = [];
    var f = n.filter(j => {
      var reg = new RegExp('^(?:' + names[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + '(?:\\((\\d+)\\))?)$');
      if (reg.test(j)) {
        if (reg.exec(j)[1] == undefined)
          m[0] = true;
        else {
          m[Number(reg.exec(j)[1])] = true;
        }
      }
      return reg.test(j);
    });
    for (var k = 0; k < m.length; k++) {
      if (!m[k])
        break;
    }
    if (f.length) {
      names[i] = names[i] + (k ? ('(' + (k) + ')') : '');
    }
    n.push(names[i])
  }
  return n;
}

module.exports = {
  renameFiles
};
