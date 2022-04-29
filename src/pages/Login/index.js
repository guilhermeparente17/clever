import React, { useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import UserSelector from '../../redux/selectors'
import { acessLogin, getUser } from '../../redux/ActionTypes/ActionTypes'


const Login = () => {
    const accessLogin = useSelector(UserSelector.getAcessLogin);
    const infoUser = useSelector(UserSelector.getUser);
    const dispatch = useDispatch()
    const [user, setUser] = useState({email: '', password: ''})
    console.log(infoUser);
    console.log(accessLogin);

    const login = localStorage.getItem('reduxStore');
    const loginJson = JSON.parse(login);

    console.log(loginJson)


    const loginUser = (user) => {
        loginJson.users.forEach((us) => {
            if (us.email === user.email && us.password === user.password){
                dispatch(acessLogin(true));
                dispatch(getUser(us));
            }
        })
    }

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
                <Input 
                    type={'text'} 
                    value={user.email} 
                    placeholder={'E-mail'}
                    onChange={e => setUser(prevState => ({...prevState, email: e.target.value}))} />
                <Label text={'Password'} />
                <Input 
                    type={'password'} 
                    value={user.password} 
                    placeholder={'Password'}
                    onChange={e => setUser(prevState => ({...prevState, password: e.target.value}))} />
                <PasswordRules>Must be 8 characters at least</PasswordRules>

                <LoginFormOptions>
                    <LoginRememberMe>
                        <LoginFormCheckbox type='checkbox' />
                        <LoginFormRememberMe>Remember me</LoginFormRememberMe>
                    </LoginRememberMe>
                    <LoginFormCreateAccount to='/cadastro'>Create Account</LoginFormCreateAccount>
                </LoginFormOptions>

                <Button onClick={() => loginUser(user)} text={'Sign in'} />

                
            </LoginForm>
            <LoginReserverd>@2021 All Rights Reserved</LoginReserverd>
        </LoginSection>
    </LoginContainer>
  )
}

export default Login