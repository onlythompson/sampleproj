import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "../src/components/home/Homepage";
import Bookingpage from "../src/components/booking/Bookingpage";
import BookingConfirmation from "../src/components/booking/BookingConfirmation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Bookingpage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
