import s from './About.module.scss';
import developer from '../../images/images/user-image.png';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

const About = ({ id }) => {
  return (
    <div className={s.about_box} id={id}>
      <div className={s.about}>
        <p className={s.about_text}>Hello,</p>
        <p className={s.about_name}>Andrey Vidiborets</p>
        <p className={s.about_text}>a junior Web Develporer</p>
        <Link to={{ pathname: 'https://t.me/vidiboret' }} target="_blank">
          <button className={s.about_button}>Let's Talk</button>
        </Link>
      </div>

      <div className={s.background}></div>
      <img src={developer} alt="user" />
    </div>
  );
};

export default About;
