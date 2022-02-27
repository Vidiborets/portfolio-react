import s from './Service.module.scss';
import { ReactComponent as Logo } from '../../images/icons/mobile.svg';
import { ReactComponent as Brand } from '../../images/icons/brand.svg';
import { ReactComponent as Web } from '../../images/icons/dev.svg';
import React, { Component } from 'react';

const Service = ({ id }) => {
  return (
    <div className={s.service_container} id={id}>
      <p className={s.link}>Services</p>
      <h2 className={s.title}>What actually I love to do</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.title_service}>
            <Logo className={s.logo} /> Web developer
          </p>
          <p className={s.text_service}>
            I am a Front-End developer looking for a full-time position in a
            company that's aimed at making both everyday life and business
            easier, more productive and user-friendly.
          </p>
        </li>
        <li className={s.item}>
          <p className={s.title_service}>
            <Brand className={s.logo} /> Adaptive layout
          </p>
          <p className={s.text_service}>
            I am a fast learner, responsible, and ready for challenging tasks. I
            have sound knowledge of HTML, CSS, JavaScript, and React. Also, I
            have hands-on experience in following Agile /Scrum methodology when
            working in a team.
          </p>
        </li>
        <li className={s.item}>
          <p className={s.title_service}>
            <Web className={s.logo} /> React programing
          </p>
          <p className={s.text_service}>
            I focus on HTML5, CSS3, JS, React. Looking for a remote job.
            Development, practice and work for the result are important for me.
            I intend to develop innovative technologies and deliver value to
            people.
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Service;
