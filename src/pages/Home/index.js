import React from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserSelector from '../../redux/selectors';
import Cadastro from '../Cadastro';
import Login from '../Login';


import {
    HomeContainer
} from './HomeElements'

const Home = () => {
  const accessLogin = useSelector(UserSelector.getAcessLogin);
  return (
    <HomeContainer accessLogin={accessLogin}>
      <BrowserRouter>
        <Routes>
            <Route exact path={'/cadastro'} element={<Cadastro />} />
            <Route exact path={'/'} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </HomeContainer>
  )
}

export default Home