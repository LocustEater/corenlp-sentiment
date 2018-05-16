'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _corenlp = require('corenlp')

var _annotator = _corenlp.default.simple.Annotator;

var _annotator2 = _interopRequireDefault(_annotator);

var _tokenize = _corenlp.default.simple.annotator.TokenizerAnnotator;

var _tokenize2 = _interopRequireDefault(_tokenize);

var _ssplit = _corenlp.default.simple.annotator.WordsToSentenceAnnotator;

var _ssplit2 = _interopRequireDefault(_ssplit);

var _parse = _corenlp.default.simple.annotator.ParserAnnotator;

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 * @class Class representing an SentimentAnnotator.
 * @extends Annotator
 * @memberof CoreNLP/simple/annotator
 * @requires tokenize, ssplit, parse
 */
class SentimentAnnotator extends _annotator2.default {
    /**
     * Create an Annotator
     * @param {Object} [options] a key-value map of options, without the annotator prefix
     */
    constructor(options = {}) {
      super('sentiment', _extends({}, options), [new _tokenize2.default(), new _ssplit2.default(), new _parse2.default()]);
    }
  }
  
  exports.default = SentimentAnnotator;