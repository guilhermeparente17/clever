import styled from 'styled-components'

export const ExternalLoginContainer = styled.div`
    width: 80px;
    height: 60px;
    background-color: #edf2f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    margin-right: 20px;

    &:hover{
        background-color: #E3E2FC;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 600px){
        width: 60px;
        height: 60px;
    }
`;

export const ExternalLoginImg = styled.img`
    width: 30px;
    height: 30px;

    @media screen and (max-width: 600px){
        width: 20px;
        height: 20px;
    }
`;