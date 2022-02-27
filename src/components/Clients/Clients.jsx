import s from './Clients.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Slack } from '../../images/icons/slack.svg';
import { ReactComponent as Telegram } from '../../images/icons/telegram.svg';
import { ReactComponent as Vider } from '../../images/icons/viber.svg';
import { ReactComponent as Mail } from '../../images/icons/gmail.svg';
import { ReactComponent as Whatsapp } from '../../images/icons/whats.svg';
import classNames from 'classnames';
import React, { Component } from 'react';

const Clients = () => {
  return (
    <div className={s.section_clients}>
      <p className={s.link}>Clients</p>
      <h2 className={s.title}>
        Big Deal <br /> With
      </h2>
      <ul className={s.list}>
        <li className={s.item}>
          <Link
            to={{
              pathname:
                'https://join.slack.com/t/slack-sit8820/shared_invite/zt-1404zqes4-WapdndnMj~H8h6cEafDS2A',
            }}
            target="_blank"
            className={s.link_item}
          >
            <Slack />
            <p className={s.text_link}>Slack</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to={{ pathname: 'https://t.me/vidiboret' }}
            target="_blank"
            className={classNames(s.color_link, s.link_item)}
          >
            <Telegram />
            <p className={s.text_link}>Telegram</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to={{ pathname: 'viber://chat?number=%2B380507333080' }}
            target="_blank"
            className={classNames(s.color_link_viber, s.link_item)}
          >
            <Vider />
            <p className={s.text_link}>Viber</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to="#"
            onClick={e => {
              window.location = 'mailto:a.vidiborets@gmail.com';
              e.preventDefault();
            }}
            className={classNames(s.color_link_gmail, s.link_item)}
          >
            <Mail />
            <p className={s.text_link}>Gmail</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to={{ pathname: 'https://wa.me/380507333080' }}
            target="_blank"
            className={classNames(s.color_link_whats, s.link_item)}
          >
            <Whatsapp />
            <p className={s.text_link}>WhatsApp</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Clients;
