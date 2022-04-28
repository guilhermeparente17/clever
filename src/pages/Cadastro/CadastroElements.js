import styled from 'styled-components'

export const CadastroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CadastroSection = styled.section`
    width: 700px;
    height: 800px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CadastroTitle = styled.h1`
    font-size: 50px;
    font-weight: 700;
    color: #55546f;
    text-align: center;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 600px){
        font-size: 30px;
        transition: 0.2s ease-in-out;
    }
`;

export const CadastroSubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
`;

export const CadastroHr = styled.div`
    width: 200px;
    height: 0.1px;
    background-color: #CADBE0;
    transition: 0.2s ease-in-out;


    @media screen and (max-width: 600px){
        width: 80px;
        transition: 0.2s ease-in-out;
    }
`;

export const CadastroText = styled.span`
    margin: 0px 15px;
    font-weight: 500;
    font-size: 12px;
    color: #55546f;
`;

export const PasswordRules = styled.span`
    color: ${({color}) => color || '#2c3648'};
    font-size: 14px;
    font-weight: 400;
    margin-left: 5px;
    margin-bottom: 20px;
`;

export const CadastroForm = styled.div`
    width: 530px;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 600px){
        width: 300px;
        transition: 0.2s ease-in-out;
    }
`;