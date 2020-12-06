var Input = function Input(props) {
    var error = props.error,
        helperText = props.helperText,
        disabled = props.disabled,
        icon = props.icon,
        iconStart = props.iconStart,
        value = props.value,
        _onChange = props.onChange,
        size = props.size;


    function handleFocus(e) {
        var label = void 0,
            helper = void 0,
            parent = void 0;
        if (icon) {
            label = e.currentTarget.parentElement.previousElementSibling;
            helper = e.currentTarget.parentElement.nextElementSibling;
            parent = e.currentTarget.parentElement.parentElement;
        } else {
            label = e.currentTarget.previousElementSibling;
            helper = e.currentTarget.nextElementSibling;
            parent = e.currentTarget.parentElement;
        }

        if (parent.dataset.error === true) {
            label.style.color = 'var(--red)';
            helper.style.color = 'var(--red)';
        } else {
            label.classList.toggle('focused-normal');
            helper.style.color = 'var(--gray3)';
        }
    }

    function handleBlur(e) {
        var label = void 0,
            helper = void 0,
            parent = void 0;
        if (icon) {
            label = e.currentTarget.parentElement.previousElementSibling;
            helper = e.currentTarget.parentElement.nextElementSibling;
            parent = e.currentTarget.parentElement.parentElement;
        } else {
            label = e.currentTarget.previousElementSibling;
            helper = e.currentTarget.nextElementSibling;
            parent = e.currentTarget.parentElement;
        }

        if (parent.dataset.error === true) {
            label.style.color = 'var(--red)';
            helper.style.color = 'var(--red)';
        } else {
            label.classList.toggle('focused-normal');
            helper.style.color = 'var(--gray3)';
        }
    }

    var handleError = disabled ? false : error;
    var handleHelper = !disabled ? helperText : '';

    var handleSize = size !== 'normal' ? size === 'sm' ? 'sm' : 'lg' : '';

    var handleIcon = icon ? iconStart ? React.createElement(
        'div',
        { className: 'input-group' },
        React.createElement(
            'span',
            { className: 'input-icon material-icons m-18' },
            icon
        ),
        React.createElement('input', { className: 'input-tag ' + handleSize + ' pl-2', disabled: disabled, name: 'input', type: 'text', placeholder: 'Placeholder', value: value, onChange: function onChange(e) {
                _onChange(e.currentTarget.value);
            }, onFocus: function onFocus(e) {
                return handleFocus(e);
            }, onBlur: function onBlur(e) {
                return handleBlur(e);
            } })
    ) : React.createElement(
        'div',
        { className: 'input-group' },
        React.createElement('input', { className: 'input-tag ' + handleSize + ' pl-2', disabled: disabled, name: 'input', type: 'text', placeholder: 'Placeholder', value: value, onChange: function onChange(e) {
                _onChange(e.currentTarget.value);
            }, onFocus: function onFocus(e) {
                return handleFocus(e);
            }, onBlur: function onBlur(e) {
                return handleBlur(e);
            } }),
        React.createElement(
            'span',
            { className: 'input-icon input-icon-right material-icons m-18' },
            icon
        )
    ) : React.createElement('input', { className: 'input-tag' + handleSize, disabled: disabled, name: 'input', type: 'text', placeholder: 'Placeholder', value: value, onChange: function onChange(e) {
            _onChange(e.currentTarget.value);
        }, onFocus: function onFocus(e) {
            return handleFocus(e);
        }, onBlur: function onBlur(e) {
            return handleBlur(e);
        } });

    return React.createElement(
        'div',
        { className: 'input-container', 'data-error': handleError },
        React.createElement(
            'label',
            { className: 'input-label', htmlFor: 'input' },
            'Label'
        ),
        handleIcon,
        React.createElement(
            'small',
            { className: 'input-helper-text' },
            handleHelper
        )
    );
};

export default Input;