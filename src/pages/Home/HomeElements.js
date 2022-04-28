import styled from 'styled-components'

export const HomeContainer = styled.div`
    height: 100vh;
    width: 50%;
    display: ${({accessLogin}) => accessLogin ? 'none' : ''};
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1200px){
        width: 100%;
        transition: 0.2s ease-in-out;
    }
`;