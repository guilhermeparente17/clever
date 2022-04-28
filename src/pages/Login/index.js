import React from 'react'
import ExternalLogin from '../../components/ExternalLogin/ExternalLogin'

import {
    LoginContainer,
    LoginSection,
    LoginTitle,
    LoginExternalSection,
    LoginSubTitle,
    LoginHr,
    LoginText,
    LoginForm,
    PasswordRules,
    LoginFormOptions,
    LoginFormCheckbox,
    LoginFormRememberMe,
    LoginFormCreateAccount,
    LoginRememberMe,
    LoginReserverd
} from './LoginElements'

import Google from '../../assets/images/google.png'
import Mac from '../../assets/images/mac.png'
import Facebook from '../../assets/images/facebook.png'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useSelector } from 'react-redux'
import UserSelector from '../../redux/selectors'


const Login = () => {
const users = useSelector(UserSelector.getUsers);
console.log(users);


  return (
    <LoginContainer>
        <LoginSection>
            <LoginTitle>Sign in to Clever</LoginTitle>

            <LoginExternalSection>
                <ExternalLogin logo={Google} />
                <ExternalLogin logo={Mac} />
                <ExternalLogin logo={Facebook} />
            </LoginExternalSection>

            <LoginSubTitle>
                <LoginHr />
                <LoginText>or do it via E-mail</LoginText>
                <LoginHr />
            </LoginSubTitle>

            <LoginForm>
                <Label text={'E-mail'} />
                <Input type={'text'} />
                <Label text={'Password'} />
                <Input type={'password'} />
                <PasswordRules>Must be 8 characters at least</PasswordRules>

                <LoginFormOptions>
                    <LoginRememberMe>
                        <LoginFormCheckbox type='checkbox' />
                        <LoginFormRememberMe>Remember me</LoginFormRememberMe>
                    </LoginRememberMe>
                    <LoginFormCreateAccount to='/cadastro'>Create Account</LoginFormCreateAccount>
                </LoginFormOptions>

                <Button text={'Sign in'} />

                
            </LoginForm>
            <LoginReserverd>@2021 All Rights Reserved</LoginReserverd>
        </LoginSection>
    </LoginContainer>
  )
}

export default Login