import React from "react";

export default function Database() {
  return (
    <div class="container my-5">
      <h1 class="display-4 mb-4">Database Schema</h1>
      <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/tree/main/database/migrations" className="btn btn-outline-dark mb-4"><i className="fa-brands fa-github"></i> Database Migrations</a>
      <img
        src="../assets/images/database-schema.svg"
        alt="Team Room Database Schema"
        className="img-fluid mb-4"
      />
      <h2 className="my-4">Relationships</h2>
      <div class="accordion" id="schemaAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="usersHeading">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#usersCollapse"
            >
              users Table
            </button>
          </h2>
          <div
            id="usersCollapse"
            class="accordion-collapse collapse show"
            data-bs-parent="#schemaAccordion"
          >
            <div class="accordion-body">
              Stores all user information including personal data, profile info,
              and authentication fields.
              <strong>Relationships:</strong>
              <ul>
                <li>
                  <code>company_id</code> → <code>companies.id</code>
                </li>
                <li>
                  Has many: <code>user_roles</code>, <code>activities</code>,{" "}
                  <code>bookings</code>, <code>transactions</code>,{" "}
                  <code>notifications</code>, <code>wishlists</code>,{" "}
                  <code>sessions</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="companiesHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#companiesCollapse"
            >
              companies Table
            </button>
          </h2>
          <div
            id="companiesCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#schemaAccordion"
          >
            <div class="accordion-body">
              Represents registered companies. Each company is hosted by a user.
              <strong>Relationships:</strong>
              <ul>
                <li>
                  <code>host_id</code> → <code>users.id</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="rolesHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#rolesCollapse"
            >
              roles & user_roles Tables
            </button>
          </h2>
          <div
            id="rolesCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#schemaAccordion"
          >
            <div class="accordion-body">
              <strong>roles</strong> defines possible roles (e.g., admin, host).
              <strong>user_roles</strong> is a pivot table linking users to
              roles.
              <strong>Relationships:</strong>
              <ul>
                <li>
                  <code>user_roles.user_id</code> → <code>users.id</code>
                </li>
                <li>
                  <code>user_roles.role_id</code> → <code>roles.id</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="spacesHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#spacesCollapse"
            >
              spaces & Related Tables
            </button>
          </h2>
          <div
            id="spacesCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#schemaAccordion"
          >
            <div class="accordion-body">
              <strong>spaces</strong> are listed meeting rooms. Related tables
              define space media, amenities, and availability.
              <strong>Relationships:</strong>
              <ul>
                <li>
                  <code>spaces.user_id</code> → <code>users.id</code>
                </li>
                <li>
                  <code>space_amenities.space_id</code> → <code>spaces.id</code>
                </li>
                <li>
                  <code>space_amenities.amenity_id</code> →{" "}
                  <code>amenities.id</code>
                </li>
                <li>
                  <code>space_images.space_id</code> → <code>spaces.id</code>
                </li>
                <li>
                  <code>space_availabilities.space_id</code> →{" "}
                  <code>spaces.id</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="bookingsHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#bookingsCollapse"
            >
              bookings & reviews Tables
            </button>
          </h2>
          <div
            id="bookingsCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#schemaAccordion"
          >
            <div class="accordion-body">
              <strong>bookings</strong> tracks user reservations of spaces.
              <strong>reviews</strong> are feedback linked to a booking.
              <strong>Relationships:</strong>
              <ul>
                <li>
                  <code>bookings.space_id</code> → <code>spaces.id</code>
                </li>
                <li>
                  <code>bookings.user_id</code> → <code>users.id</code>
                </li>
                <li>
                  <code>reviews.booking_id</code> → <code>bookings.id</code>
                </li>
                <li>
                  <code>reviews.user_id</code> → <code>users.id</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="transactionsHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#transactionsCollapse"
            >
              transactions Table
            </button>
          </h2>
          <div
            id="transactionsCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#schemaAccordion"
          >
            <div class="accordion-body">
              Handles all payments for bookings.
              <strong>Relationships:</strong>
              <ul>
                <li>
                  <code>booking_id</code> → <code>bookings.id</code>
                </li>
                <li>
                  <code>user_id</code> → <code>users.id</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="miscHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#miscCollapse"
            >
              notifications, wishlists & sessions Tables
            </button>
          </h2>
          <div
            id="miscCollapse"
            class="accordion-collapse collapse"
            data-bs-parent="#schemaAccordion"
          >
            <div class="accordion-body">
              Utility tables tied to user experience and system events.
              <strong>Relationships:</strong>
              <ul>
                <li>
                  <code>notifications.user_id</code> → <code>users.id</code>
                </li>
                <li>
                  <code>wishlists.user_id</code> → <code>users.id</code>
                </li>
                <li>
                  <code>wishlists.space_id</code> → <code>spaces.id</code>
                </li>
                <li>
                  <code>sessions.user_id</code> → <code>users.id</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
