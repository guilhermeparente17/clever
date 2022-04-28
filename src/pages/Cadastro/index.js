import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'

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

const Cadastro = () => {
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
                <Label text={'Name'} />
                <Input type={'text'} />
                <Label text={'Age'} />
                <Input type={'number'} />
                <Label text={'E-mail'} />
                <Input type={'email'} />
                <Label text={'Address'} />
                <Input type={'text'} />
                <Label text={'Password'} />
                <Input type={'password'} />
                <PasswordRules>Must be 8 characters at least</PasswordRules>
                <Label text={'Repeat Password'} />
                <Input type={'password'} />
                <PasswordRules>Must be 8 characters at least</PasswordRules>

                <Button text={'Create Account'} />
        </CadastroForm>

        
      </CadastroSection>
    </CadastroContainer>
  )
}

export default Cadastro