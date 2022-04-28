import React from 'react'

import {
    SliderContainer,
    SliderImg,
    SliderTitle
} from './SliderElements'

import Background from '../../assets/images/background.svg';
import { useSelector } from 'react-redux';
import UserSelector from '../../redux/selectors';


const Slider = () => {
  const accessLogin = useSelector(UserSelector.getAcessLogin);
  const infoUser = useSelector(UserSelector.getUser);

  return (
    <SliderContainer accessLogin={accessLogin}>
      {accessLogin ? <SliderTitle>Welcome {infoUser.name}</SliderTitle> : <SliderTitle>Welcome to Clever</SliderTitle>}
        <SliderImg src={Background} />
    </SliderContainer>
  )
}

export default Slider