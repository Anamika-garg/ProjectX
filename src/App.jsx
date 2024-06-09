import React from 'react';
import Home from './components/Home/Home';
import './App.css'
import Overview from './components/Overview/Overview';
import Features from './components/Features/Features';
import Tools from './components/Tools/Tools';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Home/>
      {/* <hr /> */}
      <Overview/>
      <Features/>
      <Tools/>
      <Faq/>
      {/* <hr /> */}
      <Footer/>
    </div>
  )
}

export default App