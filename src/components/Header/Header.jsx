import s from './Header.module.scss';
import logo from '../../images/icons/logo.svg';
import { ReactComponent as Logo } from '../../images/icons/burger.svg';
import Modal from 'react-modal';
import { useState } from 'react';
import { ReactComponent as Close } from '../../images/icons/close.svg';
import { Link, animateScroll as scrool } from 'react-scroll';
import React, { Component } from 'react';

const Header = ({ id }) => {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="logo" />
      <ul className={s.list}>
        <li className={s.item}>
          <Link
            id={id}
            to="about"
            spy={true}
            smooth={true}
            offset={-3000}
            duration={500}
            className={s.link}
          >
            Home
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-3000}
            duration={500}
            className={s.link}
          >
            About
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={s.link}
          >
            Services
          </Link>
        </li>
        <li className={s.item}>
          <Link
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={s.link}
          >
            Works
          </Link>
        </li>
      </ul>
      <div className={s.burger}>
        <button onClick={openModal} type="button" className={s.burger_button}>
          <Logo />
        </button>
      </div>
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: '15%',
            bottom: 0,
            display: 'flex',
            alignItems: null,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
          content: {
            position: 'null', // to override default styles
            top: 'null',
            left: 'null',
            right: 'null',
            bottom: 'null',
            border: null,
            borderRadius: '10px',
            background: '#fff',
            padding: '28px 15px',
            maxWidth: '400px',
            minWidth: '400px',
            height: '100%',
          },
        }}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={s.modal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button className={s.close_modal} onClick={closeModal}>
          <Close className={s.close} />
        </button>
      </Modal>
    </header>
  );
};
export default Header;
