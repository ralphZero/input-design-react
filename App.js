var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Input from './Input.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            error: false,
            disabled: false,
            helperText: '',
            iconStart: true,
            icon: '',
            value: '',
            size: 'normal',
            fullWidth: false
        }, _this.handleInputChange = function (value) {
            console.log(value);
            _this.setState({
                value: value
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Input'
                ),
                React.createElement(Input, {
                    error: this.state.error,
                    disabled: this.state.disabled,
                    helperText: this.state.helperText,
                    icon: this.state.icon,
                    iconStart: this.state.iconStart,
                    value: this.state.value,
                    onChange: this.handleInputChange,
                    size: this.state.size,
                    fullWidth: this.state.fullWidth
                })
            );
        }
    }]);

    return App;
}(React.Component);

var element = React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
);
ReactDOM.render(element, document.querySelector('#root'));