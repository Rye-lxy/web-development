/*
  不想调包，手写了一下轮播代码，感觉hook还是有一定难度的，再加上之前并没有接触过函数式编程，
  左右滑动的手势没有来得及完成，按钮完成的也不是特别好，望老师见谅。
  
  我的思路是根据时间计算图片的位置，从而达到轮播的效果，目前而言单纯的轮播实现没有什么问题。
  但是在加入按钮之后会出现时间与图片无法对应的情况，此外在反向循环的时候第一张图片和最后一张
  图片的衔接动画仍未完成。不过在鼠标悬停在图片范围内时已经实现暂停轮播的效果，通过左右按钮来
  控制图片显示。

  个人感觉目前的问题在于对 `useEffect` 和 `useRef` 的函数了解不足，对于变量和组件的生命
  周期无法进行有效的控制。因此并不能随心所欲地达到自己的目的。

  比方说对于按钮的校正，我的想法是当鼠标进入图片范围内时即暂停轮播，并开始记录暂停时长，之后
  当鼠标移出图片时从暂停前的时间开始计时，并用offset记录图片偏移张数，在鼠标移出时进行校正。

  对于第一张和最后一张图片的动画效果（这个问题只出现在用按钮调整的过程中），我的想法是在onclick
  触发时判定slider的位置，如果是向左的按钮则将第一张图片设置为最后一张，反之则将最后一张图片
  设为第一张。

  最后，个人感觉对react hooks的程序结构还不是很清晰，比方说什么时候该使用函数式编程，什么地
  方应该拆分函数之类的，我将部分组件拆分成函数之后不得不传入多个参数，且还有逐层传递的现象，使
  得函数结构极为复杂，不够简洁美观，希望之后可以与老师进一步交流~
*/

import React, { useState, useEffect, useRef } from "react";
import './style.css';

/**
 * 
 * @param {*} callback 
 * @param {number} interval 
 * @param {number} timeMax 
 * @param {*} focus 
 */
function useInterval(callback, interval, focus) {
  const [pause, setPause] = useState(0);
  const mutableStateRefPause = useRef(pause);
  mutableStateRefPause.current = pause;

  const [pauseStart, setPauseStart] = useState(new Date().getTime());
  const mutableStateRefPauseStart = useRef(pauseStart);
  mutableStateRefPauseStart.current = pauseStart;

  const [focused, setFocused] = useState(0);
  const mutableStateRefFocused = useRef(focused);
  mutableStateRefFocused.current = focused;

  useEffect(() => {
    const start = new Date().getTime();
    const Interval = setInterval(() => {
      if (focus) {
        if (!focused) {
          setPauseStart(new Date().getTime());
          setFocused(1)
        }
      } 
      else {
        var diff = new Date().getTime() - start;
        if (focused) {
          setPause(new Date().getTime() - pauseStart);
        }
        diff = diff - pause;
        
        callback(diff);

        setPause(0);
        setFocused(0);
      }
    }, interval);
    return () => clearInterval(Interval);
  }, [focus]);
};

/**
 * 
 * @param {*} setSlider 
 * @param {*} param1 
 * @param {*} focus 
 * @param {number} slideNumber 
 * @param {number} duration 
 * @param {number} speed 
 */
function useSlider(setSlider, [offset, setOffset], focus, slideNumber, duration = 1500, speed = 4000) {
  const timeMax = (slideNumber - 1) * speed;
  useInterval((diff) => {
    if (diff >= timeMax) {
      diff = diff % timeMax;
    }
    const regularTime = diff + duration;
    const slide = (regularTime / speed + offset) % slideNumber
    setOffset(0)
    setSlider(Math.floor(slide))
  }, 400, focus)
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
          transition: "none",
          // transform: `translateX(-${100 * slider / (imgs.length)}%)`,
          // transition: `transform ${duration}ms ease`,
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
  const mutableStateRefSlider = useRef(slider);
  mutableStateRefSlider.current = slider;

  const [offset, setOffset] = useState(0);

  const [focus, setFocus] = useState(0);
  const mutableStateRefFocus = useRef(focus);
  mutableStateRefFocus.current = focus;

  useSlider(setSlider, [offset, setOffset], focus, imgs.length, duration)
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
