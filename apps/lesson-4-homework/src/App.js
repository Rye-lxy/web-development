import React, { useState, useEffect } from "react";
import './style.css';

/**
 * 
 * @param {*} callback 
 * @param {*} interval 
 */
function useInterval(callback, interval) {
  useEffect(() => {
    const start = new Date().getTime();
    const I = setInterval(() => {
      callback(new Date().getTime() - start)
    }, interval)
    return () => clearInterval(I)
  }, [])
}

/**
 * 
 * @param {*} N 
 */
function useSlider(N, speed = 4000) {
  const [slider, setSlider] = useState(0);
  useInterval((diff) => {
    setSlider(_ => Math.floor(diff / speed) % N)
  }, 300)
  return slider
}

function App() {
  const imgs = [
    "img/Olympos-pickup.png",
    "img/FA-pickup.png",
    "img/1900DL-pickup.png",
    "img/Valentine2021-pickup.png",
    "img/NewYear2021-pickup.png"
  ];

  const slider = useSlider(imgs.length)
  return (
    <div className="container">
      <div 
        className="inner"
        style={{
          width: `${imgs.length * 100}%`,
          transform: `translateX(-${100 * slider / imgs.length}%)`
        }}>
        {imgs.map(src => {
          // The images can't be loaded if I store them in ./src directory.
          return <img style={{
            width: `${100 / imgs.length}%`,
          }} src={process.env.PUBLIC_URL + src} alt="" key={src} />;
        })}
      </div>
    </div>
  );
};

export default App;
