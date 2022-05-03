import React from 'react'

import {
    SliderContainer,
    SliderImg,
    SliderTitle
} from './SliderElements'

import Background from '../../assets/images/background.svg';
import { useSelector } from 'react-redux';
import UserSelector from '../../redux/selectors';
import { ToastContainer } from 'react-toastify';


const Slider = () => {
  const accessLogin = useSelector(UserSelector.getAcessLogin);
  const infoUser = useSelector(UserSelector.getUser);

  return (
    <SliderContainer accessLogin={accessLogin}>
      {accessLogin ? <SliderTitle accessLogin={accessLogin}>Welcome {infoUser.name}</SliderTitle> : <SliderTitle accessLogin={accessLogin}>Welcome to Clever</SliderTitle>}
        <SliderImg accessLogin={accessLogin} src={Background} />
        <ToastContainer />
    </SliderContainer>
  )
}

export default Slider