import s from './Portfolio.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/icons/next.svg';
import img from '../../images/images/ice_page.jpg';
import film from '../../images/images/film.jpg';
import React, { Component } from 'react';

const Portfolio = ({ id }) => {
  return (
    <div className={s.container_portfolio} id={id}>
      {/* <div className={s.background}></div> */}
      <p className={s.link}>Portfolio</p>
      <div className={s.portfolio_box}>
        <h2 className={s.title}>All Creative Projects</h2>
        <Link to="/" className={s.link_portfolio}>
          Explore More <Logo className={s.logo} />
        </Link>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.link_item}></div>
          <Link
            className={s.link_item}
            to={{ pathname: 'https://aomarchenko.github.io/Ocean-s_Thirteen/' }}
            target="_blank"
          >
            <img className={s.image} src={img} alt="Git hub" />
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={s.link_item}
            to={{
              pathname: 'https://aomarchenko.github.io/The_Magnificent_Seven/',
            }}
            target="_blank"
          >
            <img className={s.image} src={film} alt="Git hub" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Portfolio;
