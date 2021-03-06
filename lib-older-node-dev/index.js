'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index;

var _nightingaleRawFormatter = require('nightingale-raw-formatter');

var _nightingaleRawFormatter2 = _interopRequireDefault(_nightingaleRawFormatter);

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-template */
function index(minLevel) {
  var _this = this;

  var _minLevelType = _flowRuntime2.default.number();

  _flowRuntime2.default.param('minLevel', _minLevelType).assert(minLevel);

  this.minLevel = minLevel;
  this._buffer = '';
  this.handle = function (record) {
    var _recordType = _flowRuntime2.default.object();

    _flowRuntime2.default.param('record', _recordType).assert(record);

    _this._buffer += (0, _nightingaleRawFormatter2.default)(record) + '\n';
  };
  Object.defineProperty(this, 'string', {
    get: function get() {
      return _this._buffer;
    }
  });
}
//# sourceMappingURL=index.js.map