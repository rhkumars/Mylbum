const CryptoJS = require("crypto-js");

const extractNumberFromString = (str) => {
  const numberRegex = /\d+/;
  const match = str.match(numberRegex);
  if (match) {
    return parseInt(match[0]);
  }
  return null;
};
const encryptString = (str, key) => {
    const encrypted = CryptoJS.AES.encrypt(str, key).toString();
    return encrypted;
};
const decryptString = (encryptedStr, key) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedStr, key).toString(CryptoJS.enc.Utf8);
    return decrypted;
};

export { extractNumberFromString, encryptString, decryptString };
