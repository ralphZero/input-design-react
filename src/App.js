import Input from './Input.js'

class App extends React.Component {
    state = {
        error : false,
        disabled : false,
        helperText : '',
        iconStart : true,
        icon : '',
        value : '',
        size : 'normal',
        fullWidth : false,
        multiline : false,
        row : '4',
        placeholder : 'Placeholder'
    }

    handleInputChange = (value) => {
        console.log(value);
        this.setState({
            value : value
        })
    }

    handleText = (e) => {
        this.setState({
            helperText : e.currentTarget.value
        })
    }

    handleValue = (e) => {
        this.setState({
            value : e.currentTarget.value
        })
    }

    handlePlaceholder = (e) => {
        this.setState({
            placeholder : e.currentTarget.value
        })
    }

    handleIcon = (e) => {

        if(e.keyCode === 13){
            e.preventDefault();
            this.setState({
                icon : e.currentTarget.value
            })
        }
        
    }

    handleDisabled = (e) => {
        this.setState({
            disabled : e.currentTarget.value === 'true' ? (true) : (false)
        })
    }

    handleError = (e) => {
        this.setState({
            error : e.currentTarget.value === 'true' ? (true) : (false)
        })
    }

    handleFullWidth = (e) => {
        this.setState({
            fullWidth : e.currentTarget.value === 'true' ? (true) : (false)
        })
    }

    handleIconStart = (e) => {
        this.setState({
            iconStart : e.currentTarget.value === 'true' ? (true) : (false)
        })
    }

    handleMultiline = (e) => {
        this.setState({
            multiline : e.currentTarget.value === 'true' ? (true) : (false)
        })
    }

    handleSize = (e) => {
        this.setState({
            size : e.currentTarget.value
        })
    }

    handleRow = (e) => {
        const row = e.currentTarget.value;
        this.setState({
            row : !row || row <= 0 ? (1) : (parseInt(row))
        })
    }

    render() {
        return (
            <div>
                <h1>Input</h1>
                <Input 
                    error={this.state.error} 
                    disabled={this.state.disabled} 
                    helperText={this.state.helperText} 
                    icon={this.state.icon}
                    iconStart={this.state.iconStart}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    size={this.state.size}
                    fullWidth={this.state.fullWidth}
                    multiline={this.state.multiline}
                    row={this.state.row}
                    placeholder={this.state.placeholder}
                />

                <h4 className='color-grey'>Use fields below to modify the input</h4>
                <div className="grid">
                    
                    <div className="control">
                        <label htmlFor="helpertext" className="control-label">Helper Text</label>
                        <input className='control-select' placeholder='Ex: An error occured' type='text' name='helpertext' onKeyUp={this.handleText} />
                    </div>

                    <div className="control">
                        <label htmlFor="value" className="control-label">Value</label>
                        <input className='control-select' placeholder='Ex: Lorem ipsum' type='text' name='value' onKeyUp={this.handleValue} />
                    </div>

                    <div className="control">
                        <label htmlFor="placeholder" className="control-label">Placeholder</label>
                        <input className='control-select' value={this.state.placeholder} type='text' name='value' onChange={this.handlePlaceholder} />
                    </div>

                    <div className="control">
                        <label htmlFor="icon" className="control-label">Icon</label>
                        <input className='control-select' placeholder='Ex: call' type='text' name='icon' onKeyUp={this.handleIcon} />
                    </div>

                    <div className='control'>
                        <label className='control-label' htmlFor='disabled'>isStartIcon ?</label>
                        <select className='control-select' name='disabled' value={this.state.iconStart} onChange={this.handleIconStart}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div>

                    <div className='control'>
                        <label className='control-label' htmlFor='disabled'>Disabled</label>
                        <select className='control-select' name='disabled' value={this.state.disabled} onChange={this.handleDisabled}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div>

                    <div className='control'>
                        <label className='control-label' htmlFor='disabled'>Error</label>
                        <select className='control-select' name='disabled' value={this.state.error} onChange={this.handleError}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div>

                    <div className='control'>
                        <label className='control-label' htmlFor='disabled'>FullWidth</label>
                        <select className='control-select' name='disabled' value={this.state.fullWidth} onChange={this.handleFullWidth}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div> 

                    <div className='control'>
                        <label className='control-label' htmlFor='disabled'>Multiline</label>
                        <select className='control-select' name='disabled' value={this.state.multiline} onChange={this.handleMultiline}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div>

                    <div className="control">
                        <label htmlFor="row" className="control-label">Row</label>
                        <input className='control-select' placeholder='Ex: default 4' type='number' name='row' onKeyUp={this.handleRow} />
                    </div>

                    <div className='control'>
                        <label className='control-label' htmlFor='size'>Size</label>
                        <select className='control-select' name='size' value={this.state.size} onChange={this.handleSize}>
                            <option value='normal'>Normal</option>
                            <option value='sm'>Small</option>
                            <option value='lg'>Large</option>
                        </select>
                    </div>

                </div>
            </div>
        )
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#root'));

