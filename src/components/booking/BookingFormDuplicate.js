import "./Booking.css";
import React from "react";

const BookingFormDuplicate = (props) => {
  const [reservedInfo, setReservedInfo] = React.useState({
    reserved_date: '',
    reserved_time: undefined,
    nos_of_guest: 1,
    occasion: undefined,
  });

  const changeHandler = (e) => {
    // console.log(e)

    setReservedInfo(() => {
      return {
        ...reservedInfo,
        [e.target.name] : e.target.value,
      };
    });
    if (e.target.id === "reserved_date") {
      props.updateTimes({
        type: "dateChanged",
        reservedDate: e.target.value,
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (validEntries()) {
      console.log("Submitted");
      props.submitHandler(reservedInfo);
      resetEntries();
    }
  };
 
  const validEntries = () => {
    if (
      reservedInfo.reserved_date === undefined ||
      reservedInfo.reserved_date === ""
    ) {
      return false;
    }
    if (
      reservedInfo.reserved_time === undefined ||
      reservedInfo.reserved_time === ""
    ) {
      return false;
    }

    if (reservedInfo.nos_of_guest === 0 || reservedInfo.nos_of_guest < 1) {
      return false;
    }

    if (reservedInfo.occasion === undefined || reservedInfo.occasion === "") {
      return false;
    }

    return true;
  };

  const resetEntries = () => {
    setReservedInfo({
      reserved_date: undefined,
      reserved_time: undefined,
      nos_of_guest: undefined,
      occasion: undefined,
    });
  };
  return (
    <div className="booking-content">
      <h2>Make your reservations using the form below:</h2>
      <form>
        <div className="form_control">
          <div className="form_control_input">
            <label htmlFor="reserved_date">
              Choose date <span>*</span>:{" "}
            </label>
            <input
              id="reserved_date"
              name="reserved_date"
              type="date"
              onChange={changeHandler}
              aria-label="On Click"
              value={reservedInfo.reserved_date}
              required
            />
          </div>
          {reservedInfo.reserved_date === undefined ? (
            <p className="error_message">Required</p>
          ) : null}
        </div>
        <div className="form_control">
          <div className="form_control_input">
            <label htmlFor="reserved-time">
              Choose time <span>*</span>:{" "}
            </label>
            <select
              id="reserved_time"
              name="reserved_time"
              value={reservedInfo.reserved_time}
              onChange={changeHandler}
              required
            >
              <option></option>
              {props.availableTimes.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form_control">
          <div className="form_control_input">
            <label htmlFor="nos_of_guest">
              Number of guests <span>*</span>:{" "}
            </label>
            <input
              type="number"
              min="1"
              max="10"
              id="nos_of_guest"
              name="nos_of_guest"
              value={reservedInfo.nos_of_guest}
              required
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="form_control">
          <div className="form_control_input">
            <label htmlFor="occasion">
              Select Occasion <span>*</span>:{" "}
            </label>
            <select
              id="occasion"
              name="occasion"
              value={reservedInfo.occasion}
              required
              onChange={changeHandler}
            >
              <option value=""></option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <input className="primary-button medium-text" type="submit" value="Make Your reservation" onClick={submit} />
      </form>
    </div>
  );
};

export default BookingFormDuplicate;
