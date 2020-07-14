import React from 'react'
//import React, { Component } from 'react '
import "./calculator.css"

import Button from '../components/Button'
import Display from "../components/Display"


const initialState = {
    displayValue: '0',
    clearDisplay: 'false',
    operation: 'null',
    values: [0, 0],
    current: 0
}
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
export default class Calculator extends React.Component {

    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = { ...this.state.values }
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[1] = this.state.values[0]
            }


            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = { ...this.state.values }
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {


        const add_Digit = n => this.addDigit(n)
        const set_Operation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory()} triple />
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
                <Button label="0" click={add_Digit} double />
                <Button label="." click={set_Operation} />
                <Button label="=" click={set_Operation} operation />
            </div>
        )
    }
}

