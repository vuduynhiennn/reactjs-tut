import React from 'react'
import './Mycomponent.scss'

class Mycomponent extends React.Component {
    
    state = {
        name: '',
        channel: 'Vu Duy Nhien',

    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            // console.log(`My name is ${name }`)
            <>
                <input 
                    style={{color: 'green'}}
                    value={ this.state.name }
                    type="text"
                    onChange={ (event) => this.handleOnChange(event) }

                />
                <h1>{ this.state.name }</h1>
            </>
        ) 
    }
}

export default Mycomponent