import React from 'react';
import {Header} from "../../components/header"
// import {LogoReact} from "../../components/logoReact"
import { Background } from '../../components/background';

import './styles.css'

export const Clock = () => {
  return (
  <div className="body">
    <Header/>
    <Background/>
    {/* <LogoReact/> */}
  </div>
  )
}

