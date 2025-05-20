import React from "react";

export default function Introduction() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
              <h1 className="display-4 mb-4 mb-md-0 text-center">Introduction</h1>
              <img src="team-room-dashboard.svg" width={200} alt="Team Room Logo" className="img-fluid" />
            </div>
            <h2 className="mt-5 mb-3">What is a Team Room?</h2>
            <p className="mb-4">
              A booking system is a software solution that enables businesses to
              manage reservations, appointments, or bookings for their services or
              resources. It typically handles the entire workflow from availability
              checking, reservation creation, modification, cancellation, to payment
              processing and notification delivery.
            </p>

            <h2 className="mt-5 mb-4">Key Features</h2>

            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">User Management</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>User Roles System:</strong> Different user types (likely hosts and renters)
                    with role-based permissions
                  </li>
                  <li className="list-group-item">
                    <strong>User Profiles:</strong> Comprehensive user profiles with personal
                    information, bio, and profile pictures
                  </li>
                  <li className="list-group-item">
                    <strong>Company link:</strong> Users can be associated with companies
                  </li>
                  <li className="list-group-item">
                    <strong>KYC Verification:</strong> User verification system for enhanced security
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Space Management</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Space Listings:</strong> Detailed space listings with title, description,
                    location, and pricing information
                  </li>
                  <li className="list-group-item">
                    <strong>Space Search:</strong> Users can search for spaces based on various criteria
                  </li>
                  <li className="list-group-item">
                    <strong>Geolocation:</strong> Spaces have latitude and longitude for map integration
                  </li>
                  <li className="list-group-item">
                    <strong>Amenities:</strong> Spaces can have multiple amenities with icons
                  </li>
                  <li className="list-group-item">
                    <strong>Space Images:</strong> Multiple images can be uploaded for each space
                  </li>
                  <li className="list-group-item">
                    <strong>Capacity Management:</strong> Spaces have defined capacity limits
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Booking System</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Flexible Booking:</strong> Book spaces by hour with customizable durations
                  </li>
                  <li className="list-group-item">
                    <strong>Availability Management:</strong> Hosts can set regular availability schedules
                  </li>
                  <li className="list-group-item">
                    <strong>Booking Status Tracking:</strong> Track bookings as pending, confirmed,
                    cancelled, or completed
                  </li>
                  <li className="list-group-item">
                    <strong>Attendee Management:</strong> Track the number of attendees for each booking
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Financial Features</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Dynamic Pricing:</strong> Hourly rates with minimum and maximum booking durations
                  </li>
                  <li className="list-group-item">
                    <strong>Service Fee Calculation:</strong> Platform fees automatically calculated
                  </li>
                  <li className="list-group-item">
                    <strong>Host Payouts:</strong> Automatic calculation of host earnings
                  </li>
                  <li className="list-group-item">
                    <strong>Payment Processing:</strong> Integrated payment system with transaction tracking
                  </li>
                  <li className="list-group-item">
                    <strong>Payment Intent Tracking:</strong> Integration with payment gateway (likely Stripe)
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Review & Rating System</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Reviews:</strong> Renters can review host spaces after booking
                  </li>
                  <li className="list-group-item">
                    <strong>Space Reviews:</strong> Dedicated reviews for spaces
                  </li>
                  <li className="list-group-item">
                    <strong>Rating System:</strong> Numerical rating system for quality assessment
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Communication Tools</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Notifications:</strong> System for alerting users about important events
                  </li>
                  <li className="list-group-item">
                    <strong>Email Notifications:</strong> Email alerts for new bookings
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Additional Features</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Wishlist:</strong> Users can save favorite spaces to a wishlist
                  </li>
                  <li className="list-group-item">
                    <strong>Activity Tracking:</strong> System logs user activities
                  </li>
                  <li className="list-group-item">
                    <strong>Cancellation Management:</strong> Structured process for booking cancellations
                  </li>
                  <li className="list-group-item">
                    <strong>Data Export:</strong> Dynamic data export functionality
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mt-5">
              <div className="card-body">
                <h2 className="card-title">Target Audience</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Hosts:</strong> Individuals or businesses who want to rent out their spaces
                  </li>
                  <li className="list-group-item">
                    <strong>Renters:</strong> Individuals or businesses who are looking for spaces to rent
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
