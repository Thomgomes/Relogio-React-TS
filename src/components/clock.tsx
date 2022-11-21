import React from 'react';

import './clock.css'
import { HourPointer } from './hours';
import { MinutesPointer } from './minutes';
import { SecondsPointer } from './seconds';

export const Clock = () => {
  return (
    <>
      <div className="clock w-72 h-72 flex justify-center items-center bg-cover z-2
      border-4 border-solid border-neutral-800 rounded-full
      before:content-[''] before:absolute before:h-2 before:w-2 before:bg-white 
      before:rounded-full before:z-6">
        <HourPointer />
        <MinutesPointer />
        <SecondsPointer />
      </div>
    </>
  );
}


const deg = 6;
const hr = document.querySelector<HTMLElement>('.hr')!;
const mn = document.querySelector<HTMLElement>('.mn')!;
const sec = document.querySelector<HTMLElement>('.sec')!;

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr["style"].transform = `rotateZ(${(hh)+(mm/12)}deg)` 
  mn["style"].transform = `rotateZ(${mm}deg)`
  sec["style"].transform = `rotateZ(${ss}deg)`
})