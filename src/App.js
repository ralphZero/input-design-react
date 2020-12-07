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
        row : '4'
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

    handleDisabled = (e) => {
        this.setState({
            disabled : e.currentTarget.value
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
                />
                <div className="grid">
                    <div className="control">
                        <label htmlFor="helpertext" className="control-label">Helper Text</label>
                        <input className='control-select' placeholder='Ex: An error occured' type='text' name='helpertext' onKeyUp={this.handleText} />
                    </div>
                    <div className='control'>
                        <label className='control-label' htmlFor='disabled'>Disabled</label>
                        <select className='control-select' name='disabled' onChange={this.handleDisabled}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#root'));

