import React from 'react'
import css from './Hero.module.css'
import Nav from '../nav/Nav'
import { BsArrowDownCircle } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className={css.section}>
      <Nav/>
      <div className={css.container}>
        <div className={css.left}>
          <h1>Think. Make. Solve</h1>
          <span>We enjoy creating delightful, human-centered digital experiences.</span>
          <div className={css.btns}>
          <button>Work</button>
          <button>Download Resume  <BsArrowDownCircle className={css.icon}/></button>

          </div>
        </div>
        <div className={css.right}>
          
          <img src="./src/assets/js.svg" className={css.js} />

          <img src="./src/assets/react.svg" className={css.react} />

          <img src="./src/assets/redux.svg" className={css.redux} />

          <img src="./src/assets/vite.svg" className={css.vite} />

          <img src="./src/assets/node.svg" className={css.node} />

          <img src="./src/assets/tail.svg" className={css.tail} />

          <img src="./src/assets/git.svg" className={css.git} />

          <img src="./src/assets/sass.svg" className={css.sass} />
          
        </div>
      </div>
    </div>
  )
}

export default Hero;