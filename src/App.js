import React, { Suspense, lazy } from 'react';
import Container from './components/Container';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Container>
      <Header id="about" />
      <About id="about" />
      <Service id="services" />
      <Portfolio id="works" />
      <Clients />
      <Contact />
      <Footer />
    </Container>
  );
}
