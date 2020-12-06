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
    }

    handleInputChange = (value) => {
        console.log(value);
        this.setState({
            value : value
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
                />
            </div>
        )
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#root'));

