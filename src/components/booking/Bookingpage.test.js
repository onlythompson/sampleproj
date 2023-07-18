import { fireEvent, render, screen } from '@testing-library/react';
import Bookingpage from './Bookingpage';
import BookingForm from './BookingForm';


test('Renders the BookingForm heading', () => {
    render(<Bookingpage />);
    const headingElement = screen.getByText("Make your reservations using the form below:");
    expect(headingElement).toBeInTheDocument();
  })


test('InitializeItems Function return the correct list of time', () =>{

    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const updateTimes = jest.fn();
    const submitHandler = jest.fn();
    const date = new Date('2023-07-18')
    render(<BookingForm   
      availableTimes={times}
      setAvailableTimes={updateTimes}
      submitHandler={submitHandler}
      />)
    const dateInput = screen.getByLabelText(/Choose date/)
    fireEvent.change(dateInput, {target: {value : date}})

    expect(updateTimes).toHaveBeenCalled()
    expect(times.length).toBeGreaterThan(1)
})

// test('Test Initialize Items Function', () => {
//   const bookingForm = Bookingpage()
//   expect(bookingForm.initializeItems().length).toBeGreaterThan(1)
// })