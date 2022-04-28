import styled from 'styled-components'

export const SliderContainer = styled.div`
    height: 100vh;
    width: ${({accessLogin}) => accessLogin ? '100%' : '50%'};
    background-color: #2b3544;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 1s ease-in-out;

    @media screen and (max-width: 1200px){
        display: none;
        transition: 1s ease-in-out;
    }
`;

export const SliderImg = styled.img`
    width: 500px;
    height: 700px;
    background-size: cover;
    background-position: center;
`;

export const SliderTitle = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 50px;
`;