import React from 'react'

import {
    ButtonContainer
} from './ButtonElements'

const Button = ({ text, onClick, marginT }) => {
    return (
        <ButtonContainer marginT={marginT} onClick={onClick}>
            {text}
        </ButtonContainer>
    )
}

export default Button