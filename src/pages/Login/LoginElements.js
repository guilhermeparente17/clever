import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LoginContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px){
        
    }
`;

export const LoginSection = styled.section`
    width: 700px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px){
        margin-top: 30px;
    }
`;

export const LoginTitle = styled.h1`
    font-size: 50px;
    font-weight: 700;
    color: #55546f;
    text-align: center;
    margin-bottom: 30px;

    @media screen and (max-width: 600px){
        font-size: 35px;
    }
`;

export const LoginExternalSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginSubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
`;

export const LoginHr = styled.div`
    width: 200px;
    height: 0.1px;
    background-color: #CADBE0;

    @media screen and (max-width: 600px){
        width: 100px;
    }
`;

export const LoginText = styled.span`
    margin: 0px 15px;
    font-weight: 500;
    font-size: 12px;
    color: #55546f;
`;

export const LoginForm = styled.div`
    width: 530px;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 600px){
        width: 300px;
        transition: 0.2s ease-in-out;
    }
`;

export const PasswordRules = styled.span`
    color: #2c3648;
    font-size: 14px;
    font-weight: 400;
    margin-left: 5px;
`;


export const LoginFormOptions = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LoginFormCheckbox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
`;

export const LoginFormRememberMe = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: #55546f;
`;

export const LoginFormCreateAccount = styled(Link)`
    font-size: 16px;
    font-weight: 700;
    color: #4D6FFE;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;

export const LoginRememberMe = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const LoginReserverd = styled.span`
    margin-top: 80px;
    color: #55546f;
    font-size: 15px;
    font-weight: 500;
`;