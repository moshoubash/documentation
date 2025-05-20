import React from "react";

export default function AdminPages() {
  return (
    <>
      <div class="container my-5">
        <h1 class="display-4">Admin Dashboard Pages</h1>
        <p class="text-muted">
          Here is a list of admin dashboard pages that are available for the
          admin role.
        </p>

        <h2>1. Home page</h2>
        <p>
          <b>Purpose</b>: To provide an overview of the website and some charts
          to represent data.
        </p>
        <a
          href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard.blade.php"
          className="btn btn-outline-dark mb-2"
        >
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>Overview of the website.</li>
          <li>Charts to represent data.</li>
          <li>Table to show latest added meeting rooms.</li>
        </ul>
        <img
          src="https://i.ibb.co/GQ4qBChF/overview-page.png"
          className="img-fluid rounded mb-3"
          alt="home page team room"
        />

        <h2>2. Companies page</h2>
        <p>
          <b>Purpose</b>: to view curent companies partners and ability to
          register new companies
        </p>
        <a
          href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/companies/index.blade.php"
          className="btn btn-outline-dark mb-2"
        >
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View current companies partners.</li>
          <li>Ability to register new companies.</li>
          <li>Filter and Search ability</li>
          <li>Export data</li>
        </ul>
        <img
          src="https://i.ibb.co/JFbTXNGf/companies-page.png"
          className="img-fluid rounded mb-3"
          alt="companies page team room"
        />

        <h2>3. Bookings page</h2>
        <p>
          <b>Purpose</b>: To view and manage all bookings and ability to filter
          and search
        </p>
        <a
          href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/booking/index.blade.php"
          className="btn btn-outline-dark mb-2"
        >
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all bookings.</li>
          <li>Ability to filter and search.</li>
        </ul>
        <img
          src="https://i.ibb.co/20DYWnQD/bookings-page.png"
          className="img-fluid rounded mb-3"
          alt="bookings page team room"
        />

        <h2>4. Spaces page</h2>
        <p>
          <b>Purpose</b>: To view and manage all spaces and ability to filter
          and search
        </p>
        <a
          href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/spaces/index.blade.php"
          className="btn btn-outline-dark mb-2"
        >
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all spaces.</li>
          <li>Ability to filter and search.</li>
          <li>Edit and Delete Spaces</li>
        </ul>
        <img
          src="https://i.ibb.co/dJsZ5vwH/spaces-page.png"
          className="img-fluid rounded mb-3"
          alt="spaces page team room"
        />

        <h2>Transactions page</h2>
        <p>
          <b>Purpose</b>: To view and manage all transactions and ability to
          filter and search
        </p>
        <a
          href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/transactions/index.blade.php"
          className="btn btn-outline-dark mb-2"
        >
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all transactions.</li>
          <li>Ability to filter and search.</li>
          <li>Export data</li>
        </ul>
        <img
          src="https://i.ibb.co/y7dtmNB/transactions-page.png"
          className="img-fluid rounded mb-3"
          alt="transactions page team room"
        />

        <h2>5. Users page</h2>
        <p>
          <b>Purpose</b>: To view and manage all users and ability to filter and
          search
        </p>
        <a className="btn btn-outline-dark mb-2" href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/users/index.blade.php">
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all users.</li>
          <li>Ability to filter and search.</li>
          <li>Edit and Delete Users</li>
          <li>Restore users</li>
        </ul>
        <img
          src="https://i.ibb.co/Ngf4MwWK/users-page.png"
          className="img-fluid rounded mb-3"
          alt="users page team room"
        />

        <h2>6. Roles page</h2>
        <p>
          <b>Purpose</b>: To view and manage all roles and ability to filter and
          search
        </p>
        <a className="btn btn-outline-dark mb-2" href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/roles/index.blade.php">
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all roles.</li>
          <li>Ability to filter and search.</li>
          <li>Add new roles</li>
          <li>Edit and Delete Roles</li>
        </ul>
        <img
          src="https://i.ibb.co/ynxXzS64/roles-page.png"
          className="img-fluid rounded mb-3"
          alt="roles page team room"
        />

        <h2>7. KYC Verification requests page</h2>
        <p>
          <b>Purpose</b>: To view and manage all KYC Verification requests and
          ability to approve and reject documents
        </p>
        <a className="btn btn-outline-dark mb-2" href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/kyc/requests.blade.php">
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all KYC Verification requests.</li>
          <li>Ability to approve and reject documents.</li>
          <li>Show documents</li>
        </ul>
        <img
          src="https://i.ibb.co/tpLbYHLH/verifications-page.png"
          className="img-fluid rounded mb-3"
          alt="KYC Verification requests page team room"
        />

        <h2>8. Reviews page</h2>
        <p>
          <b>Purpose</b>: To view and manage all reviews and ability to filter
          and search
        </p>
        <a className="btn btn-outline-dark mb-2" href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/reviews/index.blade.php">
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all reviews.</li>
          <li>Ability to filter and search.</li>
          <li>Edit and Delete Reviews</li>
        </ul>
        <img
          src="https://i.ibb.co/W4T1SXTT/reviews-page.png"
          className="img-fluid rounded mb-3"
          alt="reviews page team room"
        />

        <h2>9. Activities page</h2>
        <p>
          <b>Purpose</b>: To view and manage all the activities and ability to
          delete and filter.
        </p>
        <a className="btn btn-outline-dark mb-2" href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/activities/index.blade.php">
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all activities.</li>
          <li>Ability to delete and filter.</li>
        </ul>
        <img
          src="https://i.ibb.co/nMxjCZxW/activities-page.png"
          className="img-fluid rounded mb-3"
          alt="activities page team room"
        />

        <h2>10. Notifications page</h2>
        <p>
          <b>Purpose</b>: To view and manage all the notifications and ability
          to delete and mark as read.
        </p>
        <a className="btn btn-outline-dark mb-2" href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/notifications/index.blade.php">
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View all notifications.</li>
          <li>Ability to delete and mark as read.</li>
        </ul>
        <img
          src="https://i.ibb.co/kVN7cXV5/notifications-page.png"
          className="img-fluid rounded mb-3"
          alt="notifications page team room"
        />

        <h2>11. Account Setting page</h2>
        <p>
          <b>Purpose</b>: To view and manage the account setting and ability to
          change the password.
        </p>
        <a className="btn btn-outline-dark mb-2" href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/dashboard/settings/index.blade.php">
          <i className="fa-brands fa-github"></i> Source Code
        </a>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>View the account setting.</li>
          <li>Ability to change the password.</li>
        </ul>
        <img
          src="https://i.ibb.co/KcmFHGv8/settings-page.png"
          className="img-fluid rounded mb-3"
          alt="account setting page team room"
        />
      </div>
    </>
  );
}
