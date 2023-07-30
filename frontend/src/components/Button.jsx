import React from 'react'
import { styled } from 'styled-components'

const Btn = styled.button`
    background-color: #FF4343;
    padding: 6px 12px 6px 12px;
    cursor: pointer;
    color: white;
    font-weight: 200;
    border: none;
    border-radius: 5px;
    text-transform: capitalize;
    
`

const Button = (props) => {
  return (
    <Btn onClick={()=>props.isType && props.filterButtons(props.value)}>
        {props.value}
    </Btn>
  )
}

export default Button