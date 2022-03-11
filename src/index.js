import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import HeaderSlider from './HeaderSlider';
import SuccessStory from './SuccessStory';
import ProgramList from './ProgramList';
import Newsletter from './Newsletter';
import Footer from './Footer';
import AppBar from './AppBar';
import "@fontsource/poppins";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
    <AppBar />
    <HeaderSlider />
    <SuccessStory />
    <ProgramList />
    <Newsletter />
    <Footer />
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
