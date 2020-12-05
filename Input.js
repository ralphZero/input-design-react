var Input = function Input(props) {
    return React.createElement(
        'div',
        { className: 'input-container' },
        React.createElement(
            'label',
            { className: 'input-label', htmlFor: 'input' },
            'Label'
        ),
        React.createElement('input', { className: 'input-tag', name: 'input', type: 'text', placeholder: 'Placeholder' }),
        React.createElement(
            'small',
            { className: 'input-helper-text' },
            'Helper text'
        )
    );
};

export default Input;