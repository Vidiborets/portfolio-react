import s from './Footer.module.scss';
import { ReactComponent as Insta } from '../../images/icons/insta.svg';
import { ReactComponent as Dink } from '../../images/icons/linkin.svg';
import { ReactComponent as Git } from '../../images/icons/linkGit.svg';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
const Footer = () => {
  return (
    <div className={s.footer}>
      <h2 className={s.title}>Let’s be Friends</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <Link
            to={{
              pathname:
                'https://www.instagram.com/invites/contact/?i=dwhec3iit48e&utm_content=plcvv',
            }}
            target="_blank"
          >
            <Insta />
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to={{ pathname: 'www.linkedin.com/in/андрей-выдиборец-a94609211' }}
            target="_blank"
          >
            <Dink />
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to={{ pathname: 'https://github.com/Vidiborets' }}
            target="_blank"
          >
            <Git />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
