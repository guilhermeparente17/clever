import React from 'react'

import {
    InputContainer,
    InputType
} from './InputElements'

const Input = ({ type, placeholder, onChange }) => {
    return (
        <InputContainer>
            <InputType onChange={onChange} placeholder={placeholder} type={type} />
        </InputContainer>
    )
}

export default Input