import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import { addUser } from '../../redux/ActionTypes/ActionTypes'
import { useNavigate } from "react-router-dom";


import {
  CadastroContainer,
  CadastroSection,
  CadastroTitle,
  CadastroSubTitle,
  CadastroHr,
  CadastroText,
  PasswordRules,
  CadastroForm
} from './CadastroElements'

import { useDispatch } from 'react-redux';

const Cadastro = () => {
  const [user, setUser] = useState({name: '', age: null, email: '', address: '', password: '', repeatPassword: ''})
  const [passowrdOk, setPassowrdOk] = useState(false);
  const dispatch = useDispatch()
  const history = useNavigate()

  useEffect(() => {
    if((user.password === user.repeatPassword) && (user.password.length > 0 || user.repeatPassword.length > 0)){
      setPassowrdOk(true)
    } else {
      setPassowrdOk(false)
    }

  }, [user.password, user.repeatPassword])

  const createUser = (user) => {
    console.log(user);
    try{
      dispatch(addUser(user));
      history('/');
    } catch (error) {
      console.log(error.reponse);
    } finally {
      console.log('criação de usuario finalizado');
    }

  }


  return (
    <CadastroContainer>
      <CadastroSection>
        <CadastroTitle>Create Account</CadastroTitle>

        <CadastroSubTitle>
          <CadastroHr />
          <CadastroText>Create your account</CadastroText>
          <CadastroHr />
        </CadastroSubTitle>

        <CadastroForm>
          <Label text='Name'  />
          <Input type={'text'} placeholder={'Type your name'} onChange={e => setUser(prevState => ({
            ...prevState,
            name: e.target.value
          }))} />
          <Label text={'Age'} />
          <Input type={'number'} placeholder={'Type your Age'} onChange={e => setUser(prevState => ({
            ...prevState,
            age: e.target.value
          }))} />
          <Label text={'E-mail'} />
          <Input type={'email'} placeholder={'Type your E-mail'} onChange={e => setUser(prevState => ({
            ...prevState,
            email: e.target.value
          }))}/>
          <Label text={'Address'} />
          <Input type={'text'} placeholder={'Type your Address, ex: Rua Vasconcelos...'} onChange={e => setUser(prevState => ({
            ...prevState,
            address: e.target.value
          }))} />
          <Label text={'Password'} />
          <Input type={'password'} placeholder={'Create your password'} onChange={e => setUser(prevState => ({
            ...prevState,
            password: e.target.value
          }))} />
          <Label text={'Repeat Password'} />
          <Input type={'password'} placeholder={'Repeat your password'} onChange={e => setUser(prevState => ({
            ...prevState,
            repeatPassword: e.target.value
          }))}/>
          {passowrdOk && <PasswordRules color={'#2BA62D'}>Password OK</PasswordRules>}

          <Button marginT={20} onClick={() => createUser(user)} text={'Create Account'} />
        </CadastroForm>

        
      </CadastroSection>
    </CadastroContainer>
  )
}

export default Cadastro