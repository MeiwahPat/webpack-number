"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numToWord = numToWord;
exports.wordToNum = wordToNum;

require("core-js/modules/es.array.reduce.js");

var _lodash = _interopRequireDefault(require("lodash"));

var _ref = _interopRequireDefault(require("./ref.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function numToWord(num) {
  return _lodash.default.reduce(_ref.default, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
}

function wordToNum(word) {
  return _lodash.default.reduce(_ref.default, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}