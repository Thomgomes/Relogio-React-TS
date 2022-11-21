import React from 'react';

import './clock.css'

import { HourPointer } from './hours';
import { MinutesPointer } from './minutes';
import { SecondsPointer } from './seconds';

setInterval(() => {
  const deg = 6;
  const hr = document.getElementById('hr');
  const mn = document.getElementById('mn');
  const sec = document.getElementById('sec');
  
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
  
    hr!.style.transform = `rotateZ(${(hh)+(mm/12)}deg)` 
    mn!.style.transform = `rotateZ(${mm}deg)`
    sec!.style.transform = `rotateZ(${ss}deg)`
  })

  

export const Clock = () => {
  return (
    <>
      <div className="clock mt-20 w-72 h-72 flex justify-center items-center bg-cover z-2 bg-slate-50
      border-4 border-solid border-neutral-800 rounded-full
      before:content-[''] before:absolute before:h-2 before:w-2 before:bg-yellow-700
      before:rounded-full before:z-6">
        <HourPointer />
        <MinutesPointer />
        <SecondsPointer />
      </div>
    </>
  );
}