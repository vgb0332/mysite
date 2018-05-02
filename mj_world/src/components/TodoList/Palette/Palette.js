import React from 'react';
import './Palette.css';

const Palette = ({ color, onPaletteClick }) => {
  console.log(color);
  console.log((color == 'black') ? '1' : '0.5');
  return(
    <div className="palette">
      <div onClick={()=>{onPaletteClick('black')}}
            style={{
              background : 'black',
              opacity: (color === 'black') ? '1' : '0.5'
            }}>
      </div>
      <div onClick={()=>{onPaletteClick('red')}}
            style={{
              background : 'red',
              opacity: (color === 'red') ? '1' : '0.5'
            }}></div>
      <div onClick={()=>{onPaletteClick('yellow')}}
            style={{
              background : 'yellow',
              opacity: (color === 'yellow') ? '1' : '0.5'
            }}></div>
      <div onClick={()=>{onPaletteClick('blue')}}
            style={{
              background : 'blue',
              opacity: (color === 'blue') ? '1' : '0.5'
            }}></div>
    </div>
  )
}

export default Palette;
