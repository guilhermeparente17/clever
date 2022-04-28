import React from 'react'

import {
    InputContainer,
    InputType
} from './InputElements'

const Input = ({ type }) => {
    return (
        <InputContainer>
            <InputType type={type} />
        </InputContainer>
    )
}

export default Input