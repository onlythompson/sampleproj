import { render, screen } from '@testing-library/react';
import Bookingpage from './components/booking/Bookingpage';
import { BrowserRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {
    render(    <BrowserRouter>
        <Bookingpage />
      </BrowserRouter>);
    const headingElement = screen.getByText("Make your reservations using the form below:");
    expect(headingElement).toBeInTheDocument();
  })