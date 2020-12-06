const Input = (props) => {

    const { error, helperText, disabled, icon, iconStart, value, onChange, size } = props;

    function handleFocus(e){
        let label, helper, parent;
        if(icon){
            label = e.currentTarget.parentElement.previousElementSibling;
            helper = e.currentTarget.parentElement.nextElementSibling;
            parent = e.currentTarget.parentElement.parentElement;
        }else{
            label = e.currentTarget.previousElementSibling;
            helper = e.currentTarget.nextElementSibling;
            parent = e.currentTarget.parentElement;
        }
        
        if(parent.dataset.error === true){
            label.style.color = 'var(--red)';
            helper.style.color = 'var(--red)';
        }else{
            label.classList.toggle('focused-normal');  
            helper.style.color = 'var(--gray3)';
        }
    }

    function handleBlur(e) {
        let label, helper, parent;
        if(icon){
            label = e.currentTarget.parentElement.previousElementSibling;
            helper = e.currentTarget.parentElement.nextElementSibling;
            parent = e.currentTarget.parentElement.parentElement;
        }else{
            label = e.currentTarget.previousElementSibling;
            helper = e.currentTarget.nextElementSibling;
            parent = e.currentTarget.parentElement;
        }

        if(parent.dataset.error === true){
            label.style.color = 'var(--red)';
            helper.style.color = 'var(--red)';
        }else{
            label.classList.toggle('focused-normal');  
            helper.style.color = 'var(--gray3)'; 
        }
    }

    let handleError = disabled ? (false) : (error)
    let handleHelper = !disabled ? (helperText) : ('')

    const handleSize = size !== 'normal' ? (
        size === 'sm' ? ( 'sm' ) : ( 'lg' )
    ) : (
        ''
    )

    const handleIcon = icon ? (
        iconStart ? (
            <div className="input-group">
                <span className='input-icon material-icons m-18'>{icon}</span>
                <input className={'input-tag '+handleSize+' pl-2'} disabled={disabled} name='input' type='text' placeholder='Placeholder' value={value} onChange={(e)=>{onChange(e.currentTarget.value)}} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)}/>
            </div>
        ) : (
            <div className="input-group">
                <input className={'input-tag '+handleSize+' pl-2'} disabled={disabled} name='input' type='text' placeholder='Placeholder' value={value} onChange={(e)=>{onChange(e.currentTarget.value)}} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)}/>
                <span className='input-icon input-icon-right material-icons m-18'>{icon}</span>
            </div>
        )
    ) : (
        <input className={'input-tag' + handleSize} disabled={disabled} name='input' type='text' placeholder='Placeholder' value={value} onChange={(e)=>{onChange(e.currentTarget.value)}} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)}/>
    )

    return (
        <div className='input-container' data-error={handleError}>
            <label className='input-label' htmlFor='input'>Label</label>
            { handleIcon }
            <small className='input-helper-text'>{handleHelper}</small>
        </div>
    )
}

export default Input