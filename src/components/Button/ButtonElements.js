import styled from 'styled-components'

export const ButtonContainer = styled.button`
    width: 100%;
    height: 55px;
    background-color: gray;
    border:none;
    background-color: #4d6ffe;
    color: #fff;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin-top: ${({marginT}) => `${marginT}px` || ''};

    &:hover{
        background-color: #3D5ACC;
        transition: 0.2s ease-in-out;
    }
`;