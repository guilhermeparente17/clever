import React from 'react'

import {
    ButtonContainer
} from './ButtonElements'

const Button = ({ text }) => {
    return (
        <ButtonContainer>
            {text}
        </ButtonContainer>
    )
}

export default Button