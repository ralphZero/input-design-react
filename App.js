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
            fullWidth: false,
            multiline: false,
            row: '4',
            placeholder: 'Placeholder'
        }, _this.handleInputChange = function (value) {
            console.log(value);
            _this.setState({
                value: value
            });
        }, _this.handleText = function (e) {
            _this.setState({
                helperText: e.currentTarget.value
            });
        }, _this.handleValue = function (e) {
            _this.setState({
                value: e.currentTarget.value
            });
        }, _this.handlePlaceholder = function (e) {
            _this.setState({
                placeholder: e.currentTarget.value
            });
        }, _this.handleIcon = function (e) {

            if (e.keyCode === 13) {
                e.preventDefault();
                _this.setState({
                    icon: e.currentTarget.value
                });
            }
        }, _this.handleDisabled = function (e) {
            _this.setState({
                disabled: e.currentTarget.value === 'true' ? true : false
            });
        }, _this.handleError = function (e) {
            _this.setState({
                error: e.currentTarget.value === 'true' ? true : false
            });
        }, _this.handleFullWidth = function (e) {
            _this.setState({
                fullWidth: e.currentTarget.value === 'true' ? true : false
            });
        }, _this.handleIconStart = function (e) {
            _this.setState({
                iconStart: e.currentTarget.value === 'true' ? true : false
            });
        }, _this.handleMultiline = function (e) {
            _this.setState({
                multiline: e.currentTarget.value === 'true' ? true : false
            });
        }, _this.handleSize = function (e) {
            _this.setState({
                size: e.currentTarget.value
            });
        }, _this.handleRow = function (e) {
            var row = e.currentTarget.value;
            _this.setState({
                row: !row || row <= 0 ? 1 : parseInt(row)
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
                    fullWidth: this.state.fullWidth,
                    multiline: this.state.multiline,
                    row: this.state.row,
                    placeholder: this.state.placeholder
                }),
                React.createElement(
                    'h4',
                    { className: 'color-grey' },
                    'Use fields below to modify the input'
                ),
                React.createElement(
                    'div',
                    { className: 'grid' },
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { htmlFor: 'helpertext', className: 'control-label' },
                            'Helper Text'
                        ),
                        React.createElement('input', { className: 'control-select', placeholder: 'Ex: An error occured', type: 'text', name: 'helpertext', onKeyUp: this.handleText })
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { htmlFor: 'value', className: 'control-label' },
                            'Value'
                        ),
                        React.createElement('input', { className: 'control-select', placeholder: 'Ex: Lorem ipsum', type: 'text', name: 'value', onKeyUp: this.handleValue })
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { htmlFor: 'placeholder', className: 'control-label' },
                            'Placeholder'
                        ),
                        React.createElement('input', { className: 'control-select', value: this.state.placeholder, type: 'text', name: 'value', onChange: this.handlePlaceholder })
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { htmlFor: 'icon', className: 'control-label' },
                            'Icon'
                        ),
                        React.createElement('input', { className: 'control-select', placeholder: 'Ex: call', type: 'text', name: 'icon', onKeyUp: this.handleIcon })
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { className: 'control-label', htmlFor: 'disabled' },
                            'isStartIcon ?'
                        ),
                        React.createElement(
                            'select',
                            { className: 'control-select', name: 'disabled', value: this.state.iconStart, onChange: this.handleIconStart },
                            React.createElement(
                                'option',
                                { value: 'true' },
                                'True'
                            ),
                            React.createElement(
                                'option',
                                { value: 'false' },
                                'False'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { className: 'control-label', htmlFor: 'disabled' },
                            'Disabled'
                        ),
                        React.createElement(
                            'select',
                            { className: 'control-select', name: 'disabled', value: this.state.disabled, onChange: this.handleDisabled },
                            React.createElement(
                                'option',
                                { value: 'true' },
                                'True'
                            ),
                            React.createElement(
                                'option',
                                { value: 'false' },
                                'False'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { className: 'control-label', htmlFor: 'disabled' },
                            'Error'
                        ),
                        React.createElement(
                            'select',
                            { className: 'control-select', name: 'disabled', value: this.state.error, onChange: this.handleError },
                            React.createElement(
                                'option',
                                { value: 'true' },
                                'True'
                            ),
                            React.createElement(
                                'option',
                                { value: 'false' },
                                'False'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { className: 'control-label', htmlFor: 'disabled' },
                            'FullWidth'
                        ),
                        React.createElement(
                            'select',
                            { className: 'control-select', name: 'disabled', value: this.state.fullWidth, onChange: this.handleFullWidth },
                            React.createElement(
                                'option',
                                { value: 'true' },
                                'True'
                            ),
                            React.createElement(
                                'option',
                                { value: 'false' },
                                'False'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { className: 'control-label', htmlFor: 'disabled' },
                            'Multiline'
                        ),
                        React.createElement(
                            'select',
                            { className: 'control-select', name: 'disabled', value: this.state.multiline, onChange: this.handleMultiline },
                            React.createElement(
                                'option',
                                { value: 'true' },
                                'True'
                            ),
                            React.createElement(
                                'option',
                                { value: 'false' },
                                'False'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { htmlFor: 'row', className: 'control-label' },
                            'Row'
                        ),
                        React.createElement('input', { className: 'control-select', placeholder: 'Ex: default 4', type: 'number', name: 'row', onKeyUp: this.handleRow })
                    ),
                    React.createElement(
                        'div',
                        { className: 'control' },
                        React.createElement(
                            'label',
                            { className: 'control-label', htmlFor: 'size' },
                            'Size'
                        ),
                        React.createElement(
                            'select',
                            { className: 'control-select', name: 'size', value: this.state.size, onChange: this.handleSize },
                            React.createElement(
                                'option',
                                { value: 'normal' },
                                'Normal'
                            ),
                            React.createElement(
                                'option',
                                { value: 'sm' },
                                'Small'
                            ),
                            React.createElement(
                                'option',
                                { value: 'lg' },
                                'Large'
                            )
                        )
                    )
                )
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