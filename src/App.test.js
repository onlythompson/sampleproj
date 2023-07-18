import { render, screen } from '@testing-library/react';
import Bookingpage from './components/booking/Bookingpage';


test('Renders the BookingForm heading', () => {
    render(<Bookingpage />);
    const headingElement = screen.getByText("Make your reservations using the form below:");
    expect(headingElement).toBeInTheDocument();
  })