webpackJsonp([0],{

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

	var _activities = __webpack_require__(166);

	var _activities2 = _interopRequireDefault(_activities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	_fetchMock2.default.mock('http://helloworld.com.au/api/activities', 'POST', {
		general: {
			moreActivities: 'http://activities.helloworld.com.au/'
		},
		items: [{
			cta: 'http://google.com',
			img: 'http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/9232/SITours/jackson-hole-food-tour-in-jackson-hole-198558.jpg',
			title: 'Jackson Hole Food Tour',
			subTitle: 'Jackson Hole, Wyoming',
			rating: 5,
			blurb: 'Get a taste for Jackson’s burgeoning culinary scene on this 3-hour food walking tour through the town center. With a guide, learn about the history of Jackson, a mountain',
			price: {
				topAggregator: 'from',
				bottomAggregator: 'per person',
				price: 109.13
			}
		}, {
			cta: 'http://google.com',
			img: 'http://cdn.jacksonholenet.com/images/content/20_13950_Jackson_Hole_White_Water_Rafting_md.jpg',
			title: 'Whitewater Rafting Adventure from Jackson Hole',
			subTitle: 'Jackson Hole, Wyoming',
			rating: 5,
			blurb: 'Fuel up with adventure on this whitewater rafting trip on an exhilarating section of Wyomings Snake River. Your expert guide shares the best whitewater in the Rocky Mountain',
			price: {
				topAggregator: 'from',
				bottomAggregator: 'per person',
				price: 124.09
			}
		}, {
			cta: 'http://google.com',
			img: 'https://media-cdn.tripadvisor.com/media/photo-s/08/8e/a0/36/jackson-hole-wildlife.jpg',
			title: 'Half-Day Wildlife Safari From Jackson Hole',
			subTitle: 'Jackson Hole, Wyoming',
			rating: 5,
			blurb: 'For those with time constraints late in the day, this half day Safari will give you a great experience that includes the National Elk Refuge and Grand Teton National Park',
			price: {
				topAggregator: 'from',
				bottomAggregator: 'per person',
				price: 189.75
			}
		}]
	});

	var HwrldActivitiesWidget = function () {
		function HwrldActivitiesWidget(element, options) {
			_classCallCheck(this, HwrldActivitiesWidget);

			this.element = element;
			this.options = options;
			this.getData();
		}

		_createClass(HwrldActivitiesWidget, [{
			key: 'getData',
			value: function getData() {
				var self = this;
				window.fetch('http://helloworld.com.au/api/activities', {
					method: 'POST',
					data: this.options.dest
				}).then(function (response) {
					return response.json();
				}).then(function (json) {
					self.deals = json;
					self.renderElm();
				}).catch(function (err) {
					console.log('parsing failed', err);
				});
			}
		}, {
			key: 'renderElm',
			value: function renderElm() {
				_reactDom2.default.render(_react2.default.createElement(_activities2.default, { deals: this.deals }), document.querySelector(this.element));
			}
		}]);

		return HwrldActivitiesWidget;
	}();

	window.HwrldActivitiesWidget = HwrldActivitiesWidget;

/***/ },

/***/ 166:
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

	var _activities = __webpack_require__(175);

	var _activities2 = _interopRequireDefault(_activities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Activities = (_dec = (0, _reactStyleable2.default)(_activities2.default), _dec(_class = function (_Component) {
		_inherits(Activities, _Component);

		function Activities() {
			_classCallCheck(this, Activities);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Activities).apply(this, arguments));
		}

		_createClass(Activities, [{
			key: 'render',
			value: function render() {
				var self = this;
				return _react2.default.createElement(
					'div',
					{ className: 'hwrld-widget ' + this.props.css['hwrld-widget'] },
					_react2.default.createElement(
						'ul',
						{ className: this.props.css.list + ' container-fluid' },
						this.props.deals.items.map(function (val, ind) {
							return _react2.default.createElement(
								'li',
								{ key: ind, className: self.props.css['list-item'] + ' row' },
								_react2.default.createElement('a', { href: val.cta, className: self.props.css.cta }),
								_react2.default.createElement(
									'div',
									{ className: 'col-sm-3' },
									_react2.default.createElement(
										'div',
										{ className: self.props.css['img-panel'] },
										_react2.default.createElement('img', { src: val.img, alt: val.title })
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-sm-5 col-md-6' },
									_react2.default.createElement(
										'div',
										{ className: self.props.css.title },
										val.title
									),
									_react2.default.createElement(
										'div',
										null,
										val.subTitle
									),
									_react2.default.createElement(
										'div',
										null,
										val.rating,
										' ',
										_react2.default.createElement('img', { className: self.props.css.stars, src: 'http://www.helloworld.com.au/l/Images/star-rating-' + Math.round(Number(val.rating)) + '.png', alt: 'star rating' })
									),
									_react2.default.createElement(
										'div',
										{ className: self.props.css.blurb },
										val.blurb
									)
								),
								_react2.default.createElement(
									'div',
									{ className: self.props.css['price-container'] + ' col-sm-4 col-md-3' },
									_react2.default.createElement(
										'div',
										{ className: self.props.css['arrow-panel'] },
										_react2.default.createElement('i', null)
									),
									_react2.default.createElement(
										'div',
										{ className: self.props.css['price-panel'] },
										_react2.default.createElement(
											'div',
											{ className: self.props.css['top-aggregator'] },
											val.price.topAggregator
										),
										_react2.default.createElement(
											'div',
											{ className: self.props.css.price },
											'$',
											val.price.price,
											'*'
										),
										_react2.default.createElement(
											'div',
											{ className: self.props.css['bottom-aggregator'] },
											val.price.bottomAggregator
										)
									)
								)
							);
						})
					),
					_react2.default.createElement(
						'a',
						{ href: 'this.props.general.moreActivities', className: this.props.css['see-more'] },
						'See more Activities'
					)
				);
			}
		}]);

		return Activities;
	}(_react.Component)) || _class);
	exports.default = Activities;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(174)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&localIdentName=[local]---[hash:base64:5]!./../node_modules/cssnext-loader/index.js!./../node_modules/sass-loader/index.js!./activities.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&localIdentName=[local]---[hash:base64:5]!./../node_modules/cssnext-loader/index.js!./../node_modules/sass-loader/index.js!./activities.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(173)();
	// imports


	// module
	exports.push([module.id, ".hwrld-widget---38y5N {\n  background-color: #ffffff;\n  max-width: 978px; }\n  .hwrld-widget---38y5N .list---2XMRf {\n    border-top: 1px dotted #757575; }\n  .hwrld-widget---38y5N .list-item---1wafT {\n    border-bottom: 1px dotted #757575;\n    padding: 20px 0;\n    position: relative; }\n  .hwrld-widget---38y5N .cta---2Yd0p {\n    background-color: transparent;\n    height: 100%;\n    margin-top: -20px;\n    position: absolute;\n    width: 100%;\n    z-index: 100; }\n  .hwrld-widget---38y5N .img-panel---3Q_Z9 {\n    height: 90px;\n    overflow: hidden;\n    max-width: 200px;\n    width: 100%; }\n  .hwrld-widget---38y5N .title---2lov8 {\n    color: #00BCE4;\n    font-size: 18px;\n    font-weight: bold; }\n  .hwrld-widget---38y5N .stars---k54oV {\n    height: 12px; }\n  .hwrld-widget---38y5N .blurb---OABiU {\n    height: 32px;\n    margin-top: 5px;\n    overflow: hidden; }\n  .hwrld-widget---38y5N .arrow-panel---13Dkz {\n    float: right; }\n    .hwrld-widget---38y5N .arrow-panel---13Dkz i {\n      background: url(http://cdnimagestorage.blob.core.windows.net/cdn/icons.png) -4px -4px no-repeat;\n      display: block;\n      height: 23px;\n      margin: 20px 0 0 4px;\n      width: 23px; }\n  .hwrld-widget---38y5N .price-container---265L9 {\n    padding-top: 25px; }\n  .hwrld-widget---38y5N .price-panel---31Yxg {\n    float: right; }\n  .hwrld-widget---38y5N .price---3gvTZ {\n    color: #F58227;\n    font-size: 30px;\n    font-weight: bold;\n    text-align: right; }\n  .hwrld-widget---38y5N .top-aggregator---1NDg4, .hwrld-widget---38y5N .bottom-aggregator---3C5zJ {\n    text-align: right;\n    text-transform: uppercase; }\n  .hwrld-widget---38y5N a.see-more---1Zy0w {\n    border: 2px solid #F58227;\n    border-radius: 4px;\n    color: #F58227;\n    display: table;\n    font-weight: bold;\n    margin: 20px auto 0;\n    padding: 10px 20px;\n    text-decoration: none;\n    text-transform: uppercase; }\n\n@media (max-width: 669px) {\n  .hwrld-widget---38y5N .title---2lov8 {\n    margin-top: 5px; } }\n", ""]);

	// exports
	exports.locals = {
		"hwrld-widget": "hwrld-widget---38y5N",
		"list": "list---2XMRf",
		"list-item": "list-item---1wafT",
		"cta": "cta---2Yd0p",
		"img-panel": "img-panel---3Q_Z9",
		"title": "title---2lov8",
		"stars": "stars---k54oV",
		"blurb": "blurb---OABiU",
		"arrow-panel": "arrow-panel---13Dkz",
		"price-container": "price-container---265L9",
		"price-panel": "price-panel---31Yxg",
		"price": "price---3gvTZ",
		"top-aggregator": "top-aggregator---1NDg4",
		"bottom-aggregator": "bottom-aggregator---3C5zJ",
		"see-more": "see-more---1Zy0w"
	};

/***/ }

});