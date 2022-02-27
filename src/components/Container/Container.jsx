import PropTypes from 'prop-types';
import s from './Container.module.scss';
import React, { Component } from 'react';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

Container.defaultProps = {
  children: [],
};

Container.protoTypes = {
  children: PropTypes.node,
};

export default Container;
