import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cadastro from '../Cadastro';
import Login from '../Login';


import {
    HomeContainer
} from './HomeElements'

const Home = () => {
  return (
    <HomeContainer>
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