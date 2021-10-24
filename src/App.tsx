// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Home from "./Pages/Home";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
import { Fragment } from 'react';
import Mobile from './Pages/404';
function App() {
  const matches = useMediaQuery('(max-width:900px)');

  return (
    <div>
     <Fragment>
      <div className="whole-container">
      <Menu />
      <Home />     
      <Footer />
    </div>
     </Fragment>
      </div>
  );
}
export default App;
