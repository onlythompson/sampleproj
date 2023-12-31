import "./Booking.css";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = (props) => {
  const reservedInfo = {
    reserved_date: "",
    reserved_time: "",
    nos_of_guest: 0,
    occasion: "",
  };

  const formik = useFormik({
    initialValues: reservedInfo,
    onSubmit: (values) => {
      // console.log("Submitted. ", values)
      console.log("Submitted: ", values)
      props.submitHandler(values)
      formik.resetForm()
    },
    validationSchema: Yup.object({
      reserved_date: Yup.string().required("Required"),
      reserved_time: Yup.string().required("Required"),
      nos_of_guest: Yup.string()
        .required("Required")
        .min(1, "Expected Guest Should be specified"),
      occasion: Yup.string().required("Required"),
    }),
  });


  const changeHandler = (e) => {
    formik.handleChange(e);
    if (e.target.id === "reserved_date") {
      props.updateTimes({
        type: "dateChanged",
        reservedDate: e.target.value,
      });
    }
  };

  return (
    <div className="booking-content">
      <h2>Make your reservations using the form below:</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form_control">
          <div className="form_control_input">
            <label htmlFor="reserved_date">
              Choose date <span>*</span>:{" "}
            </label>
            <input
              id="reserved_date"
              name="reserved_date"
              type="date"
              {...formik.getFieldProps("reserved_date")}
              onChange={changeHandler}
              aria-label="date input"
              required
            />
          </div>
          {formik.errors.reserved_date? (
            <p className="error_message">{formik.errors.reserved_date}</p>
          ) : null}
        </div>
        <div className="form_control">
          <div className="form_control_input">
            <label htmlFor="reserved_time">
              Choose time <span>*</span>:{" "}
            </label>
            <select
              id="reserved_time"
              name="reserved_time"
              {...formik.getFieldProps("reserved_time")}
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
              {...formik.getFieldProps("nos_of_guest")}
              required
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
              {...formik.getFieldProps("occasion")}
              required
            >
              <option value=""></option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <input
          className="primary-button medium-text"
          type="submit"
          value="Make Your reservation"
          aria-label="submit button"
        />
      </form>
    </div>
  );
};

export default BookingForm;
