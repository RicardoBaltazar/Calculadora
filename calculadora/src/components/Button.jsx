import React from 'react'
import "./button.css"

export default function Button(props) {

    var classes = 'button'
    classes += props.operation ? ' operation' : ''
    classes += props.double ? ' double' : ''
    classes += props.triple ? ' triple' : ''

    return (
        <button 
        //clicando no botão ele retorna o valor innerHTML do botão clicado
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}