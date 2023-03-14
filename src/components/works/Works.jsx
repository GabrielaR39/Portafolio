import React from "react";
import css from "./Work.module.css";
import Web from '../../assets/web.png'

const Works = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1>Proyectos</h1>
        <div className={css.work}>
          <div className={css.note}>
            <img src={Web} alt="" />
            <div className={css.span}>
              <h4 >Portafolio</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, tempore? Maiores soluta eligendi est ad error sed tempora nulla dolores doloremque, numquam ab. Facere veritatis cupiditate asperiores, rerum voluptas culpa?</p>
              <ul className={css.list}>
              <li>Vite</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            </div>
          </div>
          <div className={css.juego}>
          <img src={Web} alt="" />
          <div className={css.span}>
              <h4 >derecha</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, tempore? Maiores soluta eligendi est ad error sed tempora nulla dolores doloremque, numquam ab. Facere veritatis cupiditate asperiores, rerum voluptas culpa?</p>
              <ul className={css.list}>
              <li>Vite</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            </div>
          </div>
          <div className={css.skinPage}>
          <img src={Web} alt="" />
          <div className={css.span}>
              <h4 >Portafolio</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, tempore? Maiores soluta eligendi est ad error sed tempora nulla dolores doloremque, numquam ab. Facere veritatis cupiditate asperiores, rerum voluptas culpa?</p>
              <ul className={css.list}>
              <li>Vite</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
