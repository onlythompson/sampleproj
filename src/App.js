

import Header from './components/header/Header'
import Main from './components/home/Homepage'
import Footer from './components/footer/Footer'
import Homepage from "../src/components/home/Homepage";
import Bookingpage from "../src/components/booking/Bookingpage";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Bookingpage />} />
      </Routes>
    </>
  );
}

export default App;
