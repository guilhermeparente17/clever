import styled from 'styled-components'

export const SliderContainer = styled.div`
    height: 100vh;
    width: 50%;
    background-color: #2b3544;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1200px){
        display: none;
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