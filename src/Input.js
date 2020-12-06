const Input = (props) => {

    const { error, helperText, disabled, icon, iconStart, value, onChange, size, fullWidth, multiline, row } = props;

    function handleFocus(e) {
        let label, helper, parent;
        if (icon) {
            label = e.currentTarget.parentElement.parentElement.firstChild;
            helper = e.currentTarget.parentElement.parentElement.lastChild;
            parent = e.currentTarget.parentElement.parentElement;
        } else {
            label = e.currentTarget.parentElement.firstChild;
            helper = e.currentTarget.parentElement.lastChild;
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
        let label, helper, parent;
        if (icon) {
            label = e.currentTarget.parentElement.parentElement.firstChild;
            helper = e.currentTarget.parentElement.parentElement.lastChild;
            parent = e.currentTarget.parentElement.parentElement;
        } else {
            label = e.currentTarget.parentElement.firstChild;
            helper = e.currentTarget.parentElement.lastChild;
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

    const handleChange = (e)  => {
        multiline ? console.log(e.currentTarget.value) : console.log(e.currentTarget.value)
        onChange(e.currentTarget.value)
    }

    let handleError = disabled ? (false) : (error)
    let handleHelper = !disabled ? (helperText) : ('')

    const handleWidth = fullWidth ? (
        'flex'
    ) : (
        'inline-flex'
    )

    const handleSize = size !== 'normal' ? (
        size === 'sm' ? ('sm') : ('lg')
    ) : (
            ''
        )

    const handleIcon = multiline === true ? (
        //multiline = true
        icon ? (
            iconStart ? (
                <div className="input-group">
                    <span className='input-icon material-icons m-18'>{icon}</span>
                    <textarea className={'input-tag ' + handleSize + ' pl-2'} disabled={disabled} name='input' rows={row} placeholder='Placeholder' onInput={handleChange} value={value} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)}></textarea>
                </div>
            ) : (
                    <div className="input-group">
                        <textarea className={'input-tag ' + handleSize + ' pr-2'} disabled={disabled} name='input' rows={row} placeholder='Placeholder' onInput={handleChange} value={value} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)}></textarea>
                        <span className='input-icon input-icon-right material-icons m-18'>{icon}</span>
                    </div>
                )
        ) : (
                <textarea className={'input-tag ' + handleSize} disabled={disabled} name='input' rows={row} placeholder='Placeholder' onInput={handleChange} value={value} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)}></textarea>
        )
    ) : (
        // multiline = false
        icon ? (
            iconStart ? (
                <div className="input-group">
                    <span className='input-icon material-icons m-18'>{icon}</span>
                    <input className={'input-tag ' + handleSize + ' pl-2'} disabled={disabled} name='input' type='text' placeholder='Placeholder' value={value} onChange={handleChange} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
                </div>
            ) : (
                    <div className="input-group">
                        <input className={'input-tag ' + handleSize + ' pr-2'} disabled={disabled} name='input' type='text' placeholder='Placeholder' value={value} onChange={handleChange} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
                        <span className='input-icon input-icon-right material-icons m-18'>{icon}</span>
                    </div>
                )
        ) : (
                <input className={'input-tag ' + handleSize} disabled={disabled} name='input' type='text' placeholder='Placeholder' value={value} onChange={handleChange} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
        )
    )

    return (
        <div className={'input-container ' + handleWidth} data-error={handleError}>
            <label className='input-label' htmlFor='input'>Label</label>
            { handleIcon}
            <small className='input-helper-text'>{handleHelper}</small>
        </div>
    )
}

export default Input