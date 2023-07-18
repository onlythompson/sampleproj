import HeroComponent from "../home/HeroComponent";

const BookingConfirmation = () => {
  return (
    <main className="booking-page">
      <HeroComponent disableReserveTable={true} />
      <div className="booking-content">
        <h1>Booking Confirmation</h1>
        <p>
          We are pleased to inform you that your table reservation is successful
        </p>
      </div>
    </main>
  );
};

export default BookingConfirmation;
