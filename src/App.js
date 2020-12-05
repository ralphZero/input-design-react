import Input from './Input.js'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Input</h1>
                <Input />
            </div>
        )
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#root'));

