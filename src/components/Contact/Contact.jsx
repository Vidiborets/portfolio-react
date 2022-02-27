import s from './Contact.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import React, { Component } from 'react';

const Contact = props => {
  const initialState = {
    name: '',
    email: '',
    subject: '',
  };

  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    reset();
    emailjs
      .send(
        'service_tirtu5c',
        'template_e98bhoa',
        values,
        'user_Sl7x6lghSUI2o0PGjCFj3',
      )
      .then(
        response => {
          console.log('SUCCES', response);
          setStatus('SUCCESS');
        },
        error => {
          console.log('Failed....', error);
        },
      );
  };

  const handleChange = e => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const reset = () => {
    setValues('');
  };
  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
        reset();
      }, 1000);
    }
  });

  const { name, email, subject } = props;
  return (
    <div>
      <p className={s.link}>Contact Me</p>
      <div className={s.box_title}>
        <h2 className={s.title}>Let me know if you want to talk with me</h2>
        <Link
          to="#"
          onClick={e => {
            window.location = 'mailto:a.vidiborets@gmail.com';
            e.preventDefault();
          }}
          className={s.link_email}
        >
          a.vidiborets@gmail.com
        </Link>
      </div>
      <form onSubmit={handleSubmit} id="form">
        <div className={s.box_input}>
          <label htmlFor="name"></label>
          <input
            className={s.input}
            placeholder="What’s your name?"
            type="text"
            onChange={handleChange}
            name="name"
            value={name}
            id="name"
            required
          />
        </div>
        <div className={s.box_input}>
          <label htmlFor="email"></label>
          <input
            className={s.input}
            placeholder="Your email"
            type="text"
            onChange={handleChange}
            name="email"
            value={email}
            id="email"
            required
          />
        </div>
        <div className={s.box_input}>
          <label htmlFor="subject"></label>
          <input
            className={s.input}
            placeholder="Tell me about you"
            type="subject"
            onChange={handleChange}
            name="subject"
            value={subject}
            id="subject"
            required
          />
        </div>
        <button type="submit" className={s.about_button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
