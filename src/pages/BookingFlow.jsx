import React from "react";

export default function BookingFlow() {
  return (
    <>
      <div class="container my-5">
        <div class="card-header">
          <h1 class="display-4">Booking Flow</h1>
        </div>
        <div class="card-body">
          <p class="text-muted">
            This section describes the end-to-end flow of the room booking
            process in the TeamRoom application, from selecting a room to
            completing a reservation.
          </p>

          <h5 class="text-secondary">1. Room Discovery</h5>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              Users (renters) browse available rooms via the{" "}
              <strong>Explore</strong> or <strong>Search</strong> interface.
            </li>
            <li class="list-group-item">
              Search supports filtering by date, capacity, features, and
              location.
            </li>
            <li class="list-group-item">
              Each room displays its availability, price, and host details.
            </li>
          </ul>

          <h5 class="text-secondary">2. Booking Request</h5>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              User selects a room and submits a booking form with preferred date
              and time.
            </li>
            <li class="list-group-item">
              System validates input and checks availability in real-time.
            </li>
            <li class="list-group-item">
              If the room is available, a provisional booking record is created.
            </li>
          </ul>

          <h5 class="text-secondary">3. Payment</h5>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              User is redirected to the checkout page.
            </li>
            <li class="list-group-item">
              Payment is processed using <strong>Stripe</strong> or another
              configured provider.
            </li>
            <li class="list-group-item">
              On success, the booking is confirmed and the user is redirected to
              a confirmation page.
            </li>
          </ul>

          <h5 class="text-secondary">4. Host Notification</h5>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              Host receives an instant notification via email and/or in-app
              alert.
            </li>
            <li class="list-group-item">
              Hosts can view, approve, or cancel bookings from their dashboard.
            </li>
          </ul>

          <h5 class="text-secondary">5. Booking Management</h5>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              Users can view upcoming bookings under their account.
            </li>
            <li class="list-group-item">
              Bookings include status indicators: Pending, Confirmed, Cancelled,
              Completed.
            </li>
            <li class="list-group-item">
              Cancellations may trigger refund logic, depending on system rules.
            </li>
          </ul>

          <h5 class="text-secondary">6. Booking Completion</h5>
          <ul class="list-group">
            <li class="list-group-item">
              Once the scheduled time passes, bookings are marked as{" "}
              <strong>Completed</strong>.
            </li>
            <li class="list-group-item">
              Users can optionally leave reviews and ratings for hosts/rooms.
            </li>
          </ul>

          {/* Booking flow diagram */}
          <div class="mt-5">
            <img
              src="../assets/images/booking-flow.svg"
              alt="Booking Flow Diagram"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}
