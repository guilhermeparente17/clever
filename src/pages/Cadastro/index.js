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
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cadastro = () => {
  const [user, setUser] = useState({name: '', age: '', email: '', address: '', password: '', repeatPassword: ''})
  const [passowrdOk, setPassowrdOk] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [rulesName, setRulesName] = useState(false);
  const [checkAge, setCheckAge] = useState(false);
  const [rulesAge, setRulesAge] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [rulesEmail, setRulesEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [rulesPassword, setRulesPassword] = useState(false);

  const dispatch = useDispatch()
  const history = useNavigate()

  useEffect(() => {
    if(user?.name?.length > 0){
      setRulesName(false);
      setCheckName(true);
    }

    if(user?.age?.length > 0){
      setRulesAge(false);
      setCheckAge(true);
    }

    if(user?.email?.length > 0){
      setRulesEmail(false);
      setCheckEmail(true);
    }

    if(user?.password?.length > 0){
      setRulesPassword(false);
      setCheckPassword(true);
    }

  }, [user?.name?.length, user?.age?.length, user?.email?.length, user?.password?.length])

  useEffect(() => {
    if((user.password === user.repeatPassword) && (user.password.length > 0 || user.repeatPassword.length > 0)){
      setPassowrdOk(true)
    } 
  }, [user.password, user.repeatPassword])

  const createUser = (user) => {

    if(user.name.length <= 0){
      setCheckName(false);
      setRulesName(true);
    }

    if(user.age.length <= 0){
      setCheckAge(false);
      setRulesAge(true);
    }

    if(user.email.length <= 0){
      setCheckEmail(false);
      setRulesEmail(true);
    }

    if(user.password.length <= 0){
      setCheckPassword(false);
      setRulesPassword(true);
    }

    try {  
        if (checkName && checkAge && checkEmail && checkPassword){
          dispatch(addUser(user));
          history('/');
          toast.success('User created successfully');
        }
    } catch (error) {
      console.log(error.reponse);
      console.log('cria????o de usuario com erro');
      toast.error('Invalid data, test again');
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
          {rulesName && <PasswordRules color='red'>Enter a name longer than 5 characters</PasswordRules>}
          <Label text={'Age'} />
          <Input type={'number'} placeholder={'Type your Age'} onChange={e => setUser(prevState => ({
            ...prevState,
            age: e.target.value
          }))} />
          {rulesAge && <PasswordRules color='red'>enter a valid age</PasswordRules>}
          <Label text={'E-mail'} />
          <Input type={'email'} placeholder={'Type your E-mail'} onChange={e => setUser(prevState => ({
            ...prevState,
            email: e.target.value
          }))}/>
          {rulesEmail && <PasswordRules color='red'>enter a valid email</PasswordRules>}
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
          {rulesPassword && <PasswordRules color='red'>Passwords Invalid</PasswordRules>}
          {passowrdOk && <PasswordRules color={'#2BA62D'}>Password OK</PasswordRules>}

          <Button marginT={20} onClick={() => createUser(user)} text={'Create Account'} />
        </CadastroForm>

        
      </CadastroSection>
    </CadastroContainer>
  )
}

export default Cadastro