import React from 'react'

import {
    InputContainer,
    InputType
} from './InputElements'

const Input = ({ type, placeholder, onChange, value }) => {
    return (
        <InputContainer>
            <InputType onChange={onChange} placeholder={placeholder} type={type} value={value} />
        </InputContainer>
    )
}

export default Input