import React from "react";

export default function Models() {
  return (
    <>
      <div class="container py-5">
        <h1 class="display-4 mb-4">Models</h1>
        <a
          className="btn btn-outline-dark mb-4"
          href="https://github.com/moshoubash/Masterpiece-TeamRoom/tree/main/app/Models"
        >
          <i className="fa-brands fa-github"></i> Github Models
        </a>
        <p>
          This technical documentation provides a comprehensive overview of the
          models used in the TeamRoom application. Each model represents a
          database table and includes information about its attributes and
          relationships.
        </p>

        <h3>Table of Contents</h3>
        <ul class="list-group mb-4">
          <li class="list-group-item">
            <a href="#user">User</a>
          </li>
          <li class="list-group-item">
            <a href="#space">Space</a>
          </li>
          <li class="list-group-item">
            <a href="#booking">Booking</a>
          </li>
          <li class="list-group-item">
            <a href="#review">Review</a>
          </li>
          <li class="list-group-item">
            <a href="#transaction">Transaction</a>
          </li>
          <li class="list-group-item">
            <a href="#notification">Notification</a>
          </li>
          <li class="list-group-item">
            <a href="#role">Role</a>
          </li>
          <li class="list-group-item">
            <a href="#activity">Activity</a>
          </li>
          <li class="list-group-item">
            <a href="#amenity">Amenity</a>
          </li>
          <li class="list-group-item">
            <a href="#spaceAvailability">SpaceAvailability</a>
          </li>
          <li class="list-group-item">
            <a href="#spaceImage">SpaceImage</a>
          </li>
          <li class="list-group-item">
            <a href="#wishlist">Wishlist</a>
          </li>
          <li class="list-group-item">
            <a href="#company">Company</a>
          </li>
        </ul>

        <div class="accordion" id="modelsAccordion">
          <div class="accordion-item" id="user">
            <h2 class="accordion-header" id="headingUser">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseUser"
                aria-expanded="true"
                aria-controls="collapseUser"
              >
                User Model
              </button>
            </h2>
            <div
              id="collapseUser"
              class="accordion-collapse collapse show"
              aria-labelledby="headingUser"
              data-bs-parent="#modelsAccordion1"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class User extends Authenticatable</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>email</td>
                      <td>User's email address</td>
                    </tr>
                    <tr>
                      <td>password</td>
                      <td>Hashed password</td>
                    </tr>
                    <tr>
                      <td>first_name</td>
                      <td>User's first name</td>
                    </tr>
                    <tr>
                      <td>last_name</td>
                      <td>User's last name</td>
                    </tr>
                    <tr>
                      <td>phone_number</td>
                      <td>User's phone number</td>
                    </tr>
                    <tr>
                      <td>profile_picture_url</td>
                      <td>Path to profile picture</td>
                    </tr>
                    <tr>
                      <td>bio</td>
                      <td>User biography</td>
                    </tr>
                    <tr>
                      <td>company_name</td>
                      <td>Name of user's company</td>
                    </tr>
                    <tr>
                      <td>is_verified</td>
                      <td>Verification status</td>
                    </tr>
                    <tr>
                      <td>is_deleted</td>
                      <td>Deletion status</td>
                    </tr>
                    <tr>
                      <td>slug</td>
                      <td>URL-friendly identifier</td>
                    </tr>
                    <tr>
                      <td>company_id</td>
                      <td>Foreign key to company</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>spaces</strong>: One-to-many with Space model (as
                    host)
                  </li>
                  <li>
                    <strong>bookingsAsRenter</strong>: One-to-many with Booking
                    model (as renter)
                  </li>
                  <li>
                    <strong>bookingsCancelled</strong>: One-to-many with Booking
                    model (as canceller)
                  </li>
                  <li>
                    <strong>reviewsAsReviewer</strong>: One-to-many with Review
                    model (as reviewer)
                  </li>
                  <li>
                    <strong>reviewsAsReviewee</strong>: One-to-many with Review
                    model (as reviewee)
                  </li>
                  <li>
                    <strong>notifications</strong>: One-to-many with
                    Notification model
                  </li>
                  <li>
                    <strong>roles</strong>: Many-to-many with Role model
                  </li>
                  <li>
                    <strong>activities</strong>: One-to-many with Activity model
                  </li>
                  <li>
                    <strong>wishlists</strong>: One-to-many with Wishlist model
                  </li>
                  <li>
                    <strong>company</strong>: Belongs-to with Company model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="space">
            <h2 class="accordion-header" id="headingSpace">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSpace"
                aria-expanded="false"
                aria-controls="collapseSpace"
              >
                Space Model
              </button>
            </h2>
            <div
              id="collapseSpace"
              class="accordion-collapse collapse"
              aria-labelledby="headingSpace"
              data-bs-parent="#modelsAccordion1"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Space extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>host_id</td>
                      <td>Foreign key to user (host)</td>
                    </tr>
                    <tr>
                      <td>title</td>
                      <td>Space title</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>Space description</td>
                    </tr>
                    <tr>
                      <td>street_address</td>
                      <td>Street address</td>
                    </tr>
                    <tr>
                      <td>city</td>
                      <td>City location</td>
                    </tr>
                    <tr>
                      <td>postal_code</td>
                      <td>Postal code</td>
                    </tr>
                    <tr>
                      <td>country</td>
                      <td>Country location</td>
                    </tr>
                    <tr>
                      <td>latitude</td>
                      <td>Geographical latitude</td>
                    </tr>
                    <tr>
                      <td>longitude</td>
                      <td>Geographical longitude</td>
                    </tr>
                    <tr>
                      <td>capacity</td>
                      <td>Maximum capacity</td>
                    </tr>
                    <tr>
                      <td>hourly_rate</td>
                      <td>Price per hour</td>
                    </tr>
                    <tr>
                      <td>min_booking_duration</td>
                      <td>Minimum booking time</td>
                    </tr>
                    <tr>
                      <td>max_booking_duration</td>
                      <td>Maximum booking time</td>
                    </tr>
                    <tr>
                      <td>is_active</td>
                      <td>Activity status</td>
                    </tr>
                    <tr>
                      <td>is_deleted</td>
                      <td>Deletion status</td>
                    </tr>
                    <tr>
                      <td>slug</td>
                      <td>URL-friendly identifier</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>host</strong>: Belongs-to with User model
                  </li>
                  <li>
                    <strong>amenities</strong>: Many-to-many with Amenity model
                  </li>
                  <li>
                    <strong>images</strong>: One-to-many with SpaceImage model
                  </li>
                  <li>
                    <strong>availabilities</strong>: One-to-many with
                    SpaceAvailability model
                  </li>
                  <li>
                    <strong>bookings</strong>: One-to-many with Booking model
                  </li>
                  <li>
                    <strong>reviews</strong>: One-to-many with Review model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="booking">
            <h2 class="accordion-header" id="headingBooking">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBooking"
                aria-expanded="false"
                aria-controls="collapseBooking"
              >
                Booking Model
              </button>
            </h2>
            <div
              id="collapseBooking"
              class="accordion-collapse collapse"
              aria-labelledby="headingBooking"
              data-bs-parent="#modelsAccordion1"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Booking extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>space_id</td>
                      <td>Foreign key to space</td>
                    </tr>
                    <tr>
                      <td>renter_id</td>
                      <td>Foreign key to user (renter)</td>
                    </tr>
                    <tr>
                      <td>start_datetime</td>
                      <td>Booking start time</td>
                    </tr>
                    <tr>
                      <td>end_datetime</td>
                      <td>Booking end time</td>
                    </tr>
                    <tr>
                      <td>num_attendees</td>
                      <td>Number of attendees</td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>Booking status</td>
                    </tr>
                    <tr>
                      <td>total_price</td>
                      <td>Total booking price</td>
                    </tr>
                    <tr>
                      <td>service_fee</td>
                      <td>Service fee amount</td>
                    </tr>
                    <tr>
                      <td>host_payout</td>
                      <td>Host payout amount</td>
                    </tr>
                    <tr>
                      <td>cancellation_reason</td>
                      <td>Reason for cancellation</td>
                    </tr>
                    <tr>
                      <td>cancelled_by</td>
                      <td>Foreign key to user (canceller)</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>space</strong>: Belongs-to with Space model
                  </li>
                  <li>
                    <strong>renter</strong>: Belongs-to with User model
                  </li>
                  <li>
                    <strong>reviews</strong>: One-to-many with Review model
                  </li>
                  <li>
                    <strong>transactions</strong>: One-to-many with Transaction
                    model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="review">
            <h2 class="accordion-header" id="headingReview">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseReview"
                aria-expanded="false"
                aria-controls="collapseReview"
              >
                Review Model
              </button>
            </h2>
            <div
              id="collapseReview"
              class="accordion-collapse collapse"
              aria-labelledby="headingReview"
              data-bs-parent="#modelsAccordion1"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Review extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>booking_id</td>
                      <td>Foreign key to booking</td>
                    </tr>
                    <tr>
                      <td>reviewer_id</td>
                      <td>Foreign key to user (reviewer)</td>
                    </tr>
                    <tr>
                      <td>reviewee_id</td>
                      <td>Foreign key to user (reviewee)</td>
                    </tr>
                    <tr>
                      <td>space_id</td>
                      <td>Foreign key to space</td>
                    </tr>
                    <tr>
                      <td>rating</td>
                      <td>Numerical rating</td>
                    </tr>
                    <tr>
                      <td>review_text</td>
                      <td>Review content</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>booking</strong>: Belongs-to with Booking model
                  </li>
                  <li>
                    <strong>reviewer</strong>: Belongs-to with User model
                  </li>
                  <li>
                    <strong>reviewee</strong>: Belongs-to with User model
                  </li>
                  <li>
                    <strong>space</strong>: Belongs-to with Space model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="transaction">
            <h2 class="accordion-header" id="headingTransaction">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTransaction"
                aria-expanded="false"
                aria-controls="collapseTransaction"
              >
                Transaction Model
              </button>
            </h2>
            <div
              id="collapseTransaction"
              class="accordion-collapse collapse"
              aria-labelledby="headingTransaction"
              data-bs-parent="#modelsAccordion1"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Transaction extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>booking_id</td>
                      <td>Foreign key to booking</td>
                    </tr>
                    <tr>
                      <td>payment_method</td>
                      <td>Payment method used</td>
                    </tr>
                    <tr>
                      <td>transaction_type</td>
                      <td>Type of transaction</td>
                    </tr>
                    <tr>
                      <td>amount</td>
                      <td>Transaction amount</td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>Transaction status</td>
                    </tr>
                    <tr>
                      <td>payment_intent_id</td>
                      <td>Payment intent identifier</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>booking</strong>: Belongs-to with Booking model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="notification">
            <h2 class="accordion-header" id="headingNotification">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNotification"
                aria-expanded="true"
                aria-controls="collapseNotification"
              >
                Notification Model
              </button>
            </h2>
            <div
              id="collapseNotification"
              class="accordion-collapse collapse show"
              aria-labelledby="headingNotification"
              data-bs-parent="#modelsAccordion"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Notification extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>user_id</td>
                      <td>Foreign key to user</td>
                    </tr>
                    <tr>
                      <td>notification_type</td>
                      <td>Type of notification</td>
                    </tr>
                    <tr>
                      <td>title</td>
                      <td>Notification title</td>
                    </tr>
                    <tr>
                      <td>message</td>
                      <td>Notification message</td>
                    </tr>
                    <tr>
                      <td>is_read</td>
                      <td>Read status</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>user</strong>: Belongs-to relationship with User
                    model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="role">
            <h2 class="accordion-header" id="headingRole">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseRole"
                aria-expanded="false"
                aria-controls="collapseRole"
              >
                Role Model
              </button>
            </h2>
            <div
              id="collapseRole"
              class="accordion-collapse collapse"
              aria-labelledby="headingRole"
              data-bs-parent="#modelsAccordion"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Role extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>name</td>
                      <td>Role name</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>users</strong>: Many-to-many relationship with User
                    model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="activity">
            <h2 class="accordion-header" id="headingActivity">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseActivity"
                aria-expanded="false"
                aria-controls="collapseActivity"
              >
                Activity Model
              </button>
            </h2>
            <div
              id="collapseActivity"
              class="accordion-collapse collapse"
              aria-labelledby="headingActivity"
              data-bs-parent="#modelsAccordion"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Activity extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>user_id</td>
                      <td>Foreign key to user</td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>Activity type</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>Activity name</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>Activity description</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>user</strong>: Belongs-to relationship with User
                    model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="amenity">
            <h2 class="accordion-header" id="headingAmenity">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAmenity"
                aria-expanded="false"
                aria-controls="collapseAmenity"
              >
                Amenity Model
              </button>
            </h2>
            <div
              id="collapseAmenity"
              class="accordion-collapse collapse"
              aria-labelledby="headingAmenity"
              data-bs-parent="#modelsAccordion"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Amenity extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>name</td>
                      <td>Amenity name</td>
                    </tr>
                    <tr>
                      <td>icon</td>
                      <td>Amenity icon</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>spaces</strong>: Many-to-many relationship with
                    Space model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="spaceAvailability">
            <h2 class="accordion-header" id="headingSpaceAvailability">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSpaceAvailability"
                aria-expanded="true"
                aria-controls="collapseSpaceAvailability"
              >
                SpaceAvailability Model
              </button>
            </h2>
            <div
              id="collapseSpaceAvailability"
              class="accordion-collapse collapse show"
              aria-labelledby="headingSpaceAvailability"
              data-bs-parent="#modelsAccordion2"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class SpaceAvailability extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>space_id</td>
                      <td>Foreign key to space</td>
                    </tr>
                    <tr>
                      <td>day_of_week</td>
                      <td>Day of the week</td>
                    </tr>
                    <tr>
                      <td>start_time</td>
                      <td>Start time</td>
                    </tr>
                    <tr>
                      <td>end_time</td>
                      <td>End time</td>
                    </tr>
                    <tr>
                      <td>is_available</td>
                      <td>Availability status</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>space</strong>: Belongs-to relationship with Space
                    model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="spaceImage">
            <h2 class="accordion-header" id="headingSpaceImage">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSpaceImage"
                aria-expanded="false"
                aria-controls="collapseSpaceImage"
              >
                SpaceImage Model
              </button>
            </h2>
            <div
              id="collapseSpaceImage"
              class="accordion-collapse collapse"
              aria-labelledby="headingSpaceImage"
              data-bs-parent="#modelsAccordion2"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class SpaceImage extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>space_id</td>
                      <td>Foreign key to space</td>
                    </tr>
                    <tr>
                      <td>image_url</td>
                      <td>Image URL path</td>
                    </tr>
                    <tr>
                      <td>caption</td>
                      <td>Image caption</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>space</strong>: Belongs-to relationship with Space
                    model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="wishlist">
            <h2 class="accordion-header" id="headingWishlist">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseWishlist"
                aria-expanded="false"
                aria-controls="collapseWishlist"
              >
                Wishlist Model
              </button>
            </h2>
            <div
              id="collapseWishlist"
              class="accordion-collapse collapse"
              aria-labelledby="headingWishlist"
              data-bs-parent="#modelsAccordion2"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Wishlist extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>user_id</td>
                      <td>Foreign key to user</td>
                    </tr>
                    <tr>
                      <td>space_id</td>
                      <td>Foreign key to space</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>user</strong>: Belongs-to relationship with User
                    model
                  </li>
                  <li>
                    <strong>space</strong>: Belongs-to relationship with Space
                    model
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item" id="company">
            <h2 class="accordion-header" id="headingCompany">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCompany"
                aria-expanded="false"
                aria-controls="collapseCompany"
              >
                Company Model
              </button>
            </h2>
            <div
              id="collapseCompany"
              class="accordion-collapse collapse"
              aria-labelledby="headingCompany"
              data-bs-parent="#modelsAccordion2"
            >
              <div class="accordion-body">
                <h6 class="fw-bold">class Company extends Model</h6>
                <h6>Attributes</h6>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>name</td>
                      <td>Company name</td>
                    </tr>
                    <tr>
                      <td>phone</td>
                      <td>Company phone number</td>
                    </tr>
                    <tr>
                      <td>email</td>
                      <td>Company email</td>
                    </tr>
                    <tr>
                      <td>website</td>
                      <td>Company website</td>
                    </tr>
                    <tr>
                      <td>logo</td>
                      <td>Company logo path</td>
                    </tr>
                    <tr>
                      <td>description</td>
                      <td>Company description</td>
                    </tr>
                    <tr>
                      <td>city</td>
                      <td>City location</td>
                    </tr>
                    <tr>
                      <td>street</td>
                      <td>Street address</td>
                    </tr>
                    <tr>
                      <td>apartment</td>
                      <td>Apartment/suite number</td>
                    </tr>
                    <tr>
                      <td>floor</td>
                      <td>Floor number</td>
                    </tr>
                    <tr>
                      <td>latitude</td>
                      <td>Geographical latitude</td>
                    </tr>
                    <tr>
                      <td>longitude</td>
                      <td>Geographical longitude</td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>Company status</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Relationships</h6>
                <ul>
                  <li>
                    <strong>user</strong>: Has-one relationship with User model
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
