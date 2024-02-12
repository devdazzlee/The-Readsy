
import './App.css';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Support_Slider from './Components/Slider/Slider';
import Selling_Book_Slider from './Components/Selling_Book_Slider/Selling_Book';
import Image_Card from './Components/Image_Text/Image_Text';
import What_Offer from './Components/What_Offer/What_Offer';
import Book_Writing_Sec from './Components/Book_Writing_sec/Book_Writing_Sec';
import Card from './Components/Card/Card';
import Card2 from './Components/Card/Card2';
import Slider_Testimonal from './Components/Testimonal_Slider/Testimonal_Slider';
import Contact_Sec from './Components/Call_Sec/Contact_Sec';
import Contact_Sec_Form from './Components/Contact_Sec/Contact_Sec';
import Footer from './Components/Banner/Footer/Footer';
import Testimonal_Slider from './Components/Testimonal_Slider/Testimonal_Slider';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/pricing';
import Contact from './Pages/Contact/Contact';
import Fiction from './Pages/Fiction/Fiction';
import Book_editing from './Pages/Book_editing/Book_editing';
import Audio_Book from './Pages/Audio_Book/Audio_Book';
import Publishing from './Pages/Publishing/Publishing';
import Book_Marketing from './Pages/Book_Marketing/Book_Marketing';
import Cover_Design from './Pages/Cover_Design/Cover_Design';
import Video_Book_Trailer from './Pages/Video_Book_Trailer/Video_Book_Trailer';
import Author_Webite from './Pages/Author_Website/Author_Website';
import About from './Pages/About/About';
import Book_Printing from './Pages/Book_Printing/Book_Printing';
import ScrollToTop from './Components/ScroolTop/ScrollTop';
import Privacy_policy from './Pages/privacy-policy/privacy-policy';
import Terms_and_conditions from './Pages/terms-and-conditions/terms-and-conditions';
import Portfolio from './Pages/Portfolio/Portfolio';

function App() {  
  return (
  <>
      <BrowserRouter>
  <Routes>
    <Route
      path={"/"}
      element={
        <>
          <ScrollToTop />
          <Home />
        </>
      }
    />
    <Route
      path={"/Portfolio"}
      element={
        <>
          <ScrollToTop />
          <Portfolio />
        </>
      }
    />
    <Route
      path={"/pricing"}
      element={
        <>
          <ScrollToTop />
          <Pricing />
        </>
      }
    />
    <Route
      path={"/contact"}
      element={
        <>
          <ScrollToTop />
          <Contact />
        </>
      }
    />
    <Route
      path={"/fiction"}
      element={
        <>
          <ScrollToTop />
          <Fiction />
        </>
      }
    />
    <Route
      path={"/book-editing"}
      element={
        <>
          <ScrollToTop />
          <Book_editing />
        </>
      }
    />
    <Route
      path={"/audio-book"}
      element={
        <>
          <ScrollToTop />
          <Audio_Book />
        </>
      }
    />
    <Route
      path={"/publishing"}
      element={
        <>
          <ScrollToTop />
          <Publishing />
        </>
      }
    />
    <Route
      path={"/book-marketing"}
      element={
        <>
          <ScrollToTop />
          <Book_Marketing />
        </>
      }
    />
    <Route
      path={"/cover-design"}
      element={
        <>
          <ScrollToTop />
          <Cover_Design />
        </>
      }
    />
    <Route
      path={"/video-book-trailer"}
      element={
        <>
          <ScrollToTop />
          <Video_Book_Trailer />
        </>
      }
    />
    <Route
      path={"/author-website"}
      element={
        <>
          <ScrollToTop />
          <Author_Webite />
        </>
      }
    />
    <Route
      path={"/about"}
      element={
        <>
          <ScrollToTop />
          <About />
        </>
      }
    />
    <Route
      path={"/book-printing"}
      element={
        <>
          <ScrollToTop />
          <Book_Printing />
        </>
      }
    />

<Route
      path={"/Privacy-policy"}
      element={
        <>
          <ScrollToTop />
          <Privacy_policy />
        </>
      }
    />

<Route
      path={"/Terms-Condition"}
      element={
        <>
          <ScrollToTop />
          <Terms_and_conditions />
        </>
      }
    />
  </Routes>
</BrowserRouter>


  </>
  );
}

export default App;
