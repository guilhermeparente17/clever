import React from 'react'

import {
    ExternalLoginContainer,
    ExternalLoginImg
} from './ExternalElements'


const ExternalLogin = ({ logo }) => {
    return (
        <ExternalLoginContainer>
            <ExternalLoginImg src={logo} />
        </ExternalLoginContainer>
    )
}

export default ExternalLogin