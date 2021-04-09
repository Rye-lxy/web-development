import React, { useState, useEffect, useRef } from "react";
import './style.css';

/**
 * 
 * @param {*} callback 
 * @param {*} interval 
 */
function useInterval(callback, interval, timeMax, duration, focus) {
  useEffect(() => {
    var start = new Date().getTime();
    const Interval = setInterval(() => {
      if (focus) {
        start = new Date().getTime();
      } else {
        if (new Date().getTime() - start >= timeMax) {
          start = new Date().getTime();
        }
        const regularTime = new Date().getTime() - start + duration;
        callback(regularTime);
      }
    }, interval);
    return () => clearInterval(Interval);
  }, [focus]);
};

/**
 * 
 * @param {*} slideNumber 
 */
function useSlider([slider, setSlider], [offset, setOffset], focus, slideNumber, duration = 1500, speed = 4000) {
  const timeMax = (slideNumber - 1) * speed;

  useInterval((regularTime) => {
    const slide = (regularTime / speed + offset) % slideNumber
    // console.log(slide);
    setOffset(0);
    setSlider(Math.floor(slide))
  }, 400, timeMax, duration, slider, focus)
}

function useButton([slider, setSlider], [offset, setOffset], position, slideNumber) {
  const left = position==="left" ? 0 : "auto";
  const right = position==="right" ? 0 : "auto";
  const array = position==="left" ? "<" : ">";
  return (
    <button 
      className={position} 
      style={{
        left: `${left}`,
        right: `${right}`,
      }} 
      onClick={() => {
        if (position === "left") {
          setSlider(slider === 0 ? slideNumber - 2 : (slider - 1) % (slideNumber - 1));
          setOffset(offset - 1);
        } else {
          setSlider((slider + 1) % (slideNumber));
          setOffset(offset + 1);
        }
      }}>{array}
    </button>
  );
}

function Carousel(imgs, slider, duration) {
  if (slider === 0) {
    return (
      <div 
        className="inner"
        style={{
          width: `${(imgs.length) * 100}%`,
          // transition: "none",
          transform: `translateX(-${100 * slider / (imgs.length)}%)`,
          transition: `transform ${duration}ms ease`,
        }}>
        {imgs.map(src => {
          return <img style={{
            width: `${100 / (imgs.length)}%`,
          }} src={process.env.PUBLIC_URL + src} alt=""/>
        })}
      </div>
    );
  } else {
    return (
      <div 
        className="inner"
        style={{
          width: `${(imgs.length) * 100}%`,
          transform: `translateX(-${100 * slider / (imgs.length)}%)`,
          transition: `transform ${duration}ms ease`,
        }}>
        {imgs.map(src => {
          return <img style={{
            width: `${100 / (imgs.length)}%`,
          }} src={process.env.PUBLIC_URL + src} alt=""/>;
        })}
      </div>
    );
  }
};

function APP() {
  // The images can't be loaded if I store them in ./src directory.
  const imgs = [
    "img/Olympos-pickup.png",
    "img/FA-pickup.png",
    "img/1900DL-pickup.png",
    "img/Valentine2021-pickup.png",
    "img/NewYear2021-pickup.png"
  ];
  // Duration time, unit: ms.
  const duration = 1600;

  imgs.push(imgs[0]);

  const [slider, setSlider] = useState(0);
  const [focus, setFocus] = useState(0)
  const [offset, setOffset] = useState(0);
  const mutableStateRefFocus = useRef(focus);
  mutableStateRefFocus.current = focus;
  const mutableStateRefSlider = useRef(slider);
  mutableStateRefSlider.current = slider

  useSlider([slider, setSlider], [offset, setOffset], focus, imgs.length, duration)
  const leftButton = useButton([slider, setSlider], [offset, setOffset], "left", imgs.length);
  const rightButton = useButton([slider, setSlider], [offset, setOffset], "right", imgs.length);
  return (
    <div 
      className="container"
      onMouseEnter={() => {
        setFocus(1);
      }}
      onMouseLeave={() => {
        setFocus(0);
      }}>
        <div className="button">
          {leftButton}
          {rightButton}
        </div>
        {Carousel(imgs, slider, duration)}
      </div>
  )
}

export default APP;
