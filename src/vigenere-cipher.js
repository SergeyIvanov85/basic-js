const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(modification) {
    this.modification = modification;
  }

  encrypt(message, key) {
    if (message == null || key == null) throw new Error("Not implemented");

    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tabulaRecta = {};
    let phraseWithoutSymbols = message
      .replace(/[^a-zA-Z]/gi, "")
      .replace(/\s+/gi, ", ")
      .toUpperCase();
    let encryptionKey = key;
    let arrEncryptionLetters = [];
    let encryptionPhrase = "";
    let count = 0;
    let countLetters = 0;

    function isLetter(str) {
      return str.length === 1 && str.match(/[a-z]/i);
    }

    if (key.length > phraseWithoutSymbols.length)
      encryptionKey = key.slice(0, phraseWithoutSymbols.length + 1);

    while (phraseWithoutSymbols.length > encryptionKey.length) {
      for (let i = 0; i < key.length; i++) {
        if (phraseWithoutSymbols.length !== encryptionKey.length) {
          encryptionKey += key[i];
        }
      }
    }

    encryptionKey = encryptionKey.toUpperCase().split("");

    for (let i = 0; i < encryptionKey.length; i++) {
      tabulaRecta[encryptionKey[i]] =
        ALPHABET.slice(ALPHABET.indexOf(encryptionKey[i])) +
        ALPHABET.slice(
          0,
          ALPHABET.length -
          ALPHABET.slice(ALPHABET.indexOf(encryptionKey[i])).length
        );
    }

    for (let i = 0; i < phraseWithoutSymbols.length; i++) {
      arrEncryptionLetters.push(
        tabulaRecta[encryptionKey[i]].split("")[
        ALPHABET.indexOf(phraseWithoutSymbols[i])
        ]
      );
    }

    while (message.length > count) {
      if (isLetter(message[count])) {
        encryptionPhrase += arrEncryptionLetters[countLetters];
        count++;
        countLetters++;
      } else {
        encryptionPhrase += message[count];
        count++;
      }
    }

    return this.modification === false
      ? encryptionPhrase.split("").reverse().join("")
      : encryptionPhrase;
  }

  decrypt(message, key) {
    if (message == null || key == null) throw new Error("Not implemented");

    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tabulaRecta = {};
    let phraseWithoutSymbols = message
      .replace(/[^a-zA-Z]/gi, "")
      .replace(/\s+/gi, ", ")
      .toUpperCase();
    let decryptionKey = key;
    let arrDecryptionLetters = [];
    let decryptionPhrase = "";
    let count = 0;
    let countLetters = 0;

    function isLetter(str) {
      return str.length === 1 && str.match(/[a-z]/i);
    }

    if (key.length > phraseWithoutSymbols.length)
      decryptionKey = key.slice(0, phraseWithoutSymbols.length + 1);

    while (phraseWithoutSymbols.length > decryptionKey.length) {
      for (let i = 0; i < key.length; i++) {
        if (phraseWithoutSymbols.length !== decryptionKey.length) {
          decryptionKey += key[i];
        }
      }
    }

    decryptionKey = decryptionKey.toUpperCase().split("");

    for (let i = 0; i < decryptionKey.length; i++) {
      tabulaRecta[decryptionKey[i]] =
        ALPHABET.slice(ALPHABET.indexOf(decryptionKey[i])) +
        ALPHABET.slice(
          0,
          ALPHABET.length -
          ALPHABET.slice(ALPHABET.indexOf(decryptionKey[i])).length
        );
    }

    for (let i = 0; i < phraseWithoutSymbols.length; i++) {
      arrDecryptionLetters.push(
        ALPHABET.split("")[
        tabulaRecta[decryptionKey[i]].indexOf(phraseWithoutSymbols[i])
        ]
      );
    }

    while (message.length > count) {
      if (isLetter(message[count])) {
        decryptionPhrase += arrDecryptionLetters[countLetters];
        count++;
        countLetters++;
      } else {
        decryptionPhrase += message[count];
        count++;
      }
    }
    return this.modification === false
      ? decryptionPhrase.split("").reverse().join("")
      : decryptionPhrase;
  }
}

module.exports = {
  VigenereCipheringMachine
};
