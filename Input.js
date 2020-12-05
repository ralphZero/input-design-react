var Input = function Input(props) {

    function handleFocus(e) {
        var label = e.currentTarget.previousElementSibling;
        var helper = e.currentTarget.nextElementSibling;
        var parent = e.currentTarget.parentElement;
        if (parent.dataset.error === true) {
            label.style.color = 'var(--red)';
            helper.style.color = 'var(--red)';
        } else {
            label.classList.toggle('focused-normal');
            helper.style.color = 'var(--gray3)';
        }
    }

    function handleBlur(e) {
        var label = e.currentTarget.previousElementSibling;
        var helper = e.currentTarget.nextElementSibling;
        var parent = e.currentTarget.parentElement;
        if (parent.dataset.error === true) {
            label.style.color = 'var(--red)';
            helper.style.color = 'var(--red)';
        } else {
            label.classList.toggle('focused-normal');
            helper.style.color = 'var(--gray3)';
        }
    }

    var error = props.error,
        helperText = props.helperText,
        disabled = props.disabled;


    var handleError = disabled ? false : error;
    var handleHelper = !disabled ? helperText : '';

    return React.createElement(
        'div',
        { className: 'input-container', 'data-error': handleError },
        React.createElement(
            'label',
            { className: 'input-label', htmlFor: 'input' },
            'Label'
        ),
        React.createElement('input', { className: 'input-tag', disabled: disabled, name: 'input', type: 'text', placeholder: 'Placeholder', onFocus: function onFocus(e) {
                return handleFocus(e);
            }, onBlur: function onBlur(e) {
                return handleBlur(e);
            } }),
        React.createElement(
            'small',
            { className: 'input-helper-text' },
            handleHelper
        )
    );
};

export default Input;