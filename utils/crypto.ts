import CryptoJS from "crypto-js";



const key = "82f2ceed4c503896c8a291e560bd4325";
const iv = "bakaranprojectbismillah";

export const aesEncrypt = (text) =>
  CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key).toString(), {
    iv: CryptoJS.enc.Utf8.parse(iv).toString(),
  }).toString();

export const aesDecrypt = (text) =>
  CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key).toString(), {
    iv: CryptoJS.enc.Utf8.parse(iv).toString(),
  }).toString(CryptoJS.enc.Utf8);

