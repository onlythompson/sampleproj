import { fireEvent, render, screen } from "@testing-library/react";
import Bookingpage from "./Bookingpage";
import { BrowserRouter } from "react-router-dom";

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <Bookingpage />
    </BrowserRouter>
  );
  const headingElement = screen.getByText(
    "Make your reservations using the form below:"
  );
  expect(headingElement).toBeInTheDocument();
});

test('InitializeItems Function return the correct list of time', () =>{

    // const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    // const updateTimes = jest.fn();
    // const submitHandler = jest.fn();
    const date = new Date('2023-07-18')
    render( <BrowserRouter>
      <Bookingpage />
    </BrowserRouter>)
    const dateInput = screen.getByLabelText(/Choose date /)
    // console.log(dateInput)
    fireEvent.change(dateInput, {target: {value : date}})

})


//Write test to test for
//updateTimes and Initialize Times
//writing to and reading from local storage
//validate valid and invalid input entries
