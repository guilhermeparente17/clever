import React from 'react'

import {
    SliderContainer,
    SliderImg,
    SliderTitle
} from './SliderElements'

import Background from '../../assets/images/background.svg';

const Slider = () => {
  return (
    <SliderContainer>
      <SliderTitle>Welcome to Clever</SliderTitle>
        <SliderImg src={Background} />
    </SliderContainer>
  )
}

export default Slider