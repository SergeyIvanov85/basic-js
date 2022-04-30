const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push("( )");
    } else {
      this.arr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      !(position >= 1 && position <= this.getLength())
    ) {
      this.arr = [];
      throw new Error('You cant remove incorrect link!');
    }

    this.arr.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();

    return this;
  },
  finishChain() {
    const localArr = [].concat(this.arr);

    this.arr = [];

    return localArr.join("~~");
  },
};

module.exports = {
  chainMaker
};
