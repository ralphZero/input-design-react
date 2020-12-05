const Input = (props) => {
    return (
        <div className='input-container'>
            <label className='input-label' htmlFor='input'>Label</label>
            <input className='input-tag' name='input' type='text' placeholder='Placeholder'/>
            <small className='input-helper-text'>Helper text</small>
        </div>
    )
}

export default Input