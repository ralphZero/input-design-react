const Input = (props) => {

    function handleFocus(e){
        let label = e.currentTarget.previousElementSibling;
        let helper = e.currentTarget.nextElementSibling;
        let parent = e.currentTarget.parentElement;
        if(parent.dataset.error === true){
            label.style.color = 'var(--red)';
            helper.style.color = 'var(--red)';
        }else{
            label.classList.toggle('focused-normal');  
            helper.style.color = 'var(--gray3)';
        }
    }

    function handleBlur(e) {
        let label = e.currentTarget.previousElementSibling;
        let helper = e.currentTarget.nextElementSibling;
        let parent = e.currentTarget.parentElement;
        if(parent.dataset.error === true){
            label.style.color = 'var(--red)';
            helper.style.color = 'var(--red)';
        }else{
            label.classList.toggle('focused-normal');  
            helper.style.color = 'var(--gray3)'; 
        }
    }

    const { error, helperText, disabled } = props;

    let handleError = disabled ? (false) : (error)
    let handleHelper = !disabled ? (helperText) : ('')

    return (
        <div className='input-container' data-error={handleError}>
            <label className='input-label' htmlFor='input'>Label</label>
            <input className='input-tag' disabled={disabled} name='input' type='text' placeholder='Placeholder' onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)}/>
            <small className='input-helper-text'>{handleHelper}</small>
        </div>
    )
}

export default Input