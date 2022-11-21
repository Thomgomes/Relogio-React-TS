// import React from 'react';
import {Subtitle} from './subTitle'

import './header.css'

export const Header = () => {
  return (
    <>
      <header className="fixed w-full h-auto flex flex-col justify-center items-center 
      place-items-stretch p-9 -mt-3 text-green-300">
        <h1 className=" text-6xl font-bold mb-2 mt-5" >Relógio</h1>
      <Subtitle/>
      </header>
    </>
  );
}