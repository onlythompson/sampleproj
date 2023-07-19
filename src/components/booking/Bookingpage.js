import BookingForm from "./BookingForm";
import HeroComponent from "../home/HeroComponent";
import React, { useEffect } from "react";
import { fetchAPI, submitAPI} from '../../api/api'
import { useNavigate } from "react-router-dom";

// const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const updateTimes = (times, action) => {
  console.log("Reducer Executed:", action);
  if(action.type === 'dateChanged'){
    return fetchAPI(new Date(action.reservedDate))
  }
  return times
};

const Bookingpage = () => {
  const initializeTimes = () => {
    return fetchAPI(new Date('2023-07-18'))
  };

  const [availableTimes, dispatch] = React.useReducer(
    updateTimes,
    initializeTimes()
  );
 
  const navigate = useNavigate()

  const submitHandler= (reservedInfo) =>{
    if(submitAPI(reservedInfo)){
      navigate("/booking-confirmation")
    }
     
  }

  return (
    <main className="booking-page">
      <HeroComponent showReserveTableButton={false} />
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={dispatch}
        submitHandler={submitHandler}
      />
    </main>
  );
};

export default Bookingpage;
