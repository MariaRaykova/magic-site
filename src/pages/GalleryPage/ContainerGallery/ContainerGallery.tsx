import React, { useEffect, useState, useRef } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Modal from '../Modal/Modal';

import styles from './ContainerGallery.module.css';

function ContainerGallery(props: any) {
  const arr = [...props.allImages];

  const [state, setState] = useState<any>({
    path: props.imagePathLink,
    num: arr.indexOf(props.imagePathLink),
  });

  useEffect(() => {
    setState((prevState: any) => ({ ...prevState, path: arr[state.num] }));

    // console.log('From UseEffect', arr[state.num])
  }, [state.num]);

  const handleLeftClick = () => {
    state.num--;

    if (arr[state.num] === undefined) {
      setState((prevState: any) => ({ ...prevState, num: arr.length - 1 }));
    }
    setState((prevState: any) => ({ ...prevState, path: arr[state.num] }));
  };

  const handleRightClick = () => {
    state.num++;

    if (arr[state.num] === undefined) {
      setState((prevState: any) => ({ ...prevState, num: 0 }));
    }
    setState((prevState: any) => ({ ...prevState, path: arr[state.num] }));
  };

  const slidePresentationTime = 50; // after how many ms slide will change - now 3s / 3000ms
  const [currentSlide, setCurrentSlide] = useState(0); // value and function to set currrent slide index
  let sliderInterval = useRef(); // interval ref

  useEffect(() => {
    // @ts-ignore
    sliderInterval = setInterval(() => {
      setCurrentSlide((state.num)); // change current slide to next slide after 'slidePresentationTime'
    }, slidePresentationTime);

    // cleanup interval when your component will unmount
    return () => {
      // @ts-ignore
      clearInterval(sliderInterval);
    };
  });

  return (
    <Modal handleClose={props.handleClose}>
      <div>
        <img
          key={state.num}
          id={state.num}
          className={state.num === currentSlide ? `${styles.image} ${styles.active}` : styles.image}
          src={state.path}
          alt=""
        />

        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <span className={`${styles.leftArrow} `} onClick={handleLeftClick}><AiOutlineArrowLeft /></span>
          <span className={styles.rightArrow} onClick={handleRightClick}><AiOutlineArrowRight /></span>
        </div>
      </div>
    </Modal>
  );
}

export default ContainerGallery;
