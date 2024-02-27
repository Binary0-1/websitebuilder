import React from "react";
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/Header/Header';
import Actionbar from "./components/actionbar/Actionbar";
import Contentmap from "./components/Contentmap/Contentmap";
import Productcard from "./components/product-card/productcard";
import Productcardspecial from "./components/product-card special/productcardspecial";
import Deals from './components/Deals/deals';
import Cta from "./components/cta/cta";
import Footer from "./components/footer/footer";

const App = () => {
  const maininf01 ='<strong>WixPro 72-Inch Responsive Website Builder-</strong> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)';
  const maininf02='<Strong>SiteCraft 68-Inch Ultimate Web Design Studio- </Strong>Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)';
  const maininf03='<Strong>WixPro 72-Inch Responsive Website Builder-</Strong> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)';

  return (
    <>
      <Navbar/>
      <Header/>
      <Actionbar/>
      <Contentmap/>
      <Productcard maininfo={maininf01} addinfo="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."/>
      <Productcard maininfo={maininf02} addinfo="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.."/>
      <Productcard maininfo={maininf03} addinfo="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."/>
      <Productcardspecial maininfo={maininf01} addinfo="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides. "/>
      <Deals/>  
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
