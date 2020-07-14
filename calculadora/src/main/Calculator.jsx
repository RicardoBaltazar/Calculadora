import React from 'react'
//import React, { Component } from 'react '
import "./calculator.css"

import Button from '../components/Button'
import Display from "../components/Display"

/*
export default class Calculator extends Component {

    clearMemory() {
        console.log('Limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }


    render() {

        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" click={() => this.clearMemory()} />
                <Button label="/" />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="*" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="-" />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="+" />
                <Button label="0" />
                <Button label="." />
                <Button label="=" />
            </div>
        )
    }
}
*/




//function Calculator () {
export default class Calculator extends React.Component{

    clearMemory() {
        console.log('Limpar')
    }
    
    setOperation(operation) {
        console.log(operation)
    }
    
    addDigit(n) {
        console.log(n)
    }

    render(){


    const add_Digit = n => this.addDigit(n)
    const set_Operation = op => this.setOperation(op)
    
    return (
        <div className="calculator">
            <Display value={100} />
            <Button label="AC" click={() => this.clearMemory()} triple/>
            <Button label="/" click={set_Operation} operation />
            <Button label="7" click={add_Digit} />
            <Button label="8" click={add_Digit} />
            <Button label="9" click={add_Digit} />
            <Button label="*" click={set_Operation} operation />
            <Button label="4" click={add_Digit} />
            <Button label="5" click={add_Digit} />
            <Button label="6" click={add_Digit} />
            <Button label="-" click={set_Operation} operation />
            <Button label="1" click={add_Digit} />
            <Button label="2" click={add_Digit} />
            <Button label="3" click={add_Digit} />
            <Button label="+" click={set_Operation} operation />
            <Button label="0" click={add_Digit} double/>
            <Button label="." click={set_Operation} />
            <Button label="=" click={set_Operation} operation />
        </div>
    )
    }
}

