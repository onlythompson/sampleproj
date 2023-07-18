import "./Booking.css";
import React, { useEffect } from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";

const BookingForm = (props) => {

  const [reservedInfo, setReservedInfo] = React.useState({
    'reserved_date': '',
    'reserved_time': '',
    'nos_of_guest': 1,
    'occasion': '',
  })
  const [submissionInit, setSubmissionInit] = React.useState(false);
  const { processSubmission } = props.submitHandler
  //integrate formik an yup
  const formik = useFormik({
    initialValues: reservedInfo,
    onSubmit: (values)=>{
      setReservedInfo(values)
      setSubmissionInit(true)
    },
    validationSchema:Yup.object({
      reserved_date:Yup.date("Kindly select a date").required("Required"), 
      reserved_time:Yup.string().required("Required"), 
      nos_of_guest : Yup.number().required('Provide the number of expected guest'),
      occasion: Yup.string().required("Required")
    })
  })

  useEffect(() =>{
    if (submissionInit === true) {
      processSubmission(reservedInfo)
      setSubmissionInit(false);
    }
  },[submissionInit, reservedInfo, processSubmission])
 

  const changeHandler = (e) =>{
    // console.log(e)
    if(e.target.id === 'res-date'){
      setReservedInfo(() =>{
        return {
          ...reservedInfo,
          reserved_date : e.target.value
        }
       
      })
      props.setAvailableTimes({type: 'dateChanged', reservedDate: e.target.value})
      return
    }
    if(e.target.id === 'res-time'){
      setReservedInfo(() =>{
        return {
          ...reservedInfo,
          reserved_time : e.target.value
        }
      })
      return
    }
    if(e.target.id === 'guests'){
      setReservedInfo(() =>{
        return {
          ...reservedInfo,
          nos_of_guest : e.target.value
        }
      })
      return
    }
    if(e.target.id === 'occasion'){
      setReservedInfo(() =>{
        return {
          ...reservedInfo,
          occasion : e.target.value
        }
      })
      return
    }
  }

  // const submit =() =>{
  //   props.submitHandler(reservedInfo)
  // }

  return (
    <div className="booking-content">
      <h2>Make your reservations using the form below:</h2>
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={changeHandler}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={changeHandler} >
          { props.availableTimes.map(x => <option key={x} value={x}>{x}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={changeHandler} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={changeHandler}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" onClick={submit} />
      </form>
    </div>
  );
};

export default BookingForm;
