webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _es6Promise = __webpack_require__(159);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _whatwgFetch = __webpack_require__(163);

	var _whatwgFetch2 = _interopRequireDefault(_whatwgFetch);

	var _fetchMock = __webpack_require__(164);

	var _fetchMock2 = _interopRequireDefault(_fetchMock);

	var _lineChart = __webpack_require__(177);

	var _lineChart2 = _interopRequireDefault(_lineChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	_fetchMock2.default.mock('http://helloworld.com.au/api/line-chart', 'POST', {
		general: {
			type: 'weather'
		},
		items: [{
			temperature: 14,
			month: 'march'
		}, {
			temperature: 18,
			month: 'april'
		}, {
			temperature: 20,
			month: 'may'
		}, {
			temperature: 17,
			month: 'june'
		}, {
			temperature: 21,
			month: 'july'
		}, {
			temperature: 27,
			month: 'august'
		}]
	});

	var HwrldLineChartWidget = function () {
		function HwrldLineChartWidget(element, options) {
			_classCallCheck(this, HwrldLineChartWidget);

			this.element = element;
			this.options = options;
			this.getData();
		}

		_createClass(HwrldLineChartWidget, [{
			key: 'getData',
			value: function getData() {
				var self = this;
				window.fetch('http://helloworld.com.au/api/line-chart', {
					method: 'POST',
					data: this.options.type
				}).then(function (response) {
					return response.json();
				}).then(function (json) {
					self.chart = json;
					self.renderElm();
				}).catch(function (err) {
					console.log('parsing failed', err);
				});
			}
		}, {
			key: 'renderElm',
			value: function renderElm() {
				_reactDom2.default.render(_react2.default.createElement(_lineChart2.default, { chart: this.chart }), document.querySelector(this.element));
			}
		}]);

		return HwrldLineChartWidget;
	}();

	window.HwrldLineChartWidget = HwrldLineChartWidget;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactStyleable = __webpack_require__(167);

	var _reactStyleable2 = _interopRequireDefault(_reactStyleable);

	var _coreWidget = __webpack_require__(171);

	var _coreWidget2 = _interopRequireDefault(_coreWidget);

	var _lineChart = __webpack_require__(178);

	var _lineChart2 = _interopRequireDefault(_lineChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LineChart = (_dec = (0, _reactStyleable2.default)(_lineChart2.default), _dec(_class = function (_Component) {
		_inherits(LineChart, _Component);

		function LineChart() {
			_classCallCheck(this, LineChart);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LineChart).apply(this, arguments));
		}

		_createClass(LineChart, [{
			key: 'render',
			value: function render() {
				var self = this;
				return _react2.default.createElement(
					'div',
					{ className: 'hwrld-widget ' + this.props.css['hwrld-widget'] },
					_react2.default.createElement(
						'h1',
						null,
						'Here be dragon'
					)
				);
			}
		}]);

		return LineChart;
	}(_react.Component)) || _class);
	exports.default = LineChart;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(179);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(174)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&localIdentName=[local]---[hash:base64:5]!./../node_modules/cssnext-loader/index.js!./../node_modules/sass-loader/index.js!./line-chart.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&localIdentName=[local]---[hash:base64:5]!./../node_modules/cssnext-loader/index.js!./../node_modules/sass-loader/index.js!./line-chart.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(173)();
	// imports


	// module
	exports.push([module.id, ".hwrld-widget---rkGuW {\n  background-color: yellow;\n  max-width: 978px; }\n", ""]);

	// exports
	exports.locals = {
		"hwrld-widget": "hwrld-widget---rkGuW"
	};

/***/ }

});