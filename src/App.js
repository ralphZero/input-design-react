import Input from './Input.js'

class App extends React.Component {
    state = {
        error : false,
        disabled : false,
        helperText : ''
    }

    render() {
        return (
            <div>
                <h1>Input</h1>
                <Input 
                    error={this.state.error} 
                    disabled={this.state.disabled} 
                    helperText={this.state.helperText} 
                />
            </div>
        )
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#root'));

