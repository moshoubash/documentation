import React from "react";

export default function PublicPages() {
  return (
    <>
      <div class="container my-5">
        <h1 class="display-4">
          Public Pages
        </h1>
        <p class="text-muted">
          Here is a list of all the public pages that are available on the website.
        </p>
        <h2>1. Home page</h2>
        <p><b>Purpose</b>: To provide an overview of the website and its features.</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/welcome.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Overview of the website and its features.</li>
          <li>Search bar with filters for meeting rooms</li>
          <li>How it works section</li>
          <li>Latest Meeting Spaces added by hosts</li>
          <li>Testimonial section</li>
          <li>Navigation bar with links to other pages.</li>
          <li>Footer with links to other static pages.</li>
        </ul>
        <img src="https://i.ibb.co/gbz7jjKZ/home-page.png" className="img-fluid rounded mb-3" alt="home page team room" />

        <h2>2. Explore page</h2>
        <p><b>Purpose</b>: To list the meeting rooms with search bar and filters</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/explore.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Search bar with filters for meeting rooms</li>
          <li>List of meeting rooms with details such as name, location, price, and availability.</li>
          <li>Filter sidebar to choose depend on renter interests</li>
          <li>Pagination in the bottom of the list</li>
        </ul>
        <img src="https://i.ibb.co/x87j8NxM/explore-page.png" className="img-fluid rounded mb-3" alt="explore page team room" />

        <h2>3. Room Details page</h2>
        <p><b>Purpose</b>: To show meeting room details</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Spaces/details.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Show meeting room details</li>
          <li>Show meeting room images</li>
          <li>Show meeting room amenities</li>
          <li>Show meeting room reviews</li>
          <li>Show meeting room location</li>
          <li>Show meeting room price</li>
          <li>Show meeting room availability</li>
          <li>Show meeting room host</li>
          <li>Show meeting room description</li>
        </ul>
        <img src="https://i.ibb.co/VYKLdPgg/details-page.png" className="img-fluid rounded mb-3" alt="room details page team room" />

        <h2>4. Checkout page</h2>
        <p><b>Purpose</b>: To pay for booking that renter choose</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Payment/checkout.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Pay for booking that renter choose</li>
          <li>Show booking details</li>
          <li>Show booking total</li>
          <li>Show booking payment method</li>
          <li>Show booking payment status</li>
        </ul>
        <img src="https://i.ibb.co/TNzGZR1/checkout-page.png" className="img-fluid rounded mb-3" alt="checkout page team room" />

        <h2>5. Confirmation page</h2>
        <p><b>Purpose</b>: To indicate that the booking has been confirmed and wait for the host to approve it</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Payment/confirmation.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Show booking details</li>
          <li>Show booking total</li>
        </ul>
        <img src="https://i.ibb.co/k24h54NT/confirmation-page.png" className="img-fluid rounded mb-3" alt="confirmation page team room" />

        <h2>6. Host Stats page</h2>
        <p><b>Purpose</b>: To show host stats and apility to handle booking confirmation</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Users/Host/stats.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Show host stats</li>
          <li>Host can manage bookings</li>
        </ul>
        <img src="https://i.ibb.co/M5CdKS7k/stats-page.png" className="img-fluid rounded mb-3" alt="host stats page team room" />

        <h2>7. Profile page</h2>
        <p><b>Purpose</b>: To show host & renter details (rooms and bookings)</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Users/profile.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Show host & renter details</li>
          <li>Host can manage rooms</li>
          <li>Renter can manage bookings</li>
          <li>Edit profile button</li>
        </ul>
        <img src="https://i.ibb.co/HTfKShgS/profile-page.png" className="img-fluid rounded mb-3" alt="profile page team room" />

        <h2>8. Edit Profile page</h2>
        <p><b>Purpose</b>: let users edit their profile data (name and phone number ...)</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Users/edit.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Edit profile data</li>
          <li>Edit password</li>
        </ul>
        <img src="https://i.ibb.co/274M5Lht/edit-profile-page.png" className="img-fluid rounded mb-3" alt="edit profile page team room" />

        <h2>9. KYC Verification page</h2>
        <p><b>Purpose</b>: To verify user identity</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Users/verification.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Upload ID as image or other format like pdf</li>
        </ul>
        <img src="https://i.ibb.co/sJc1QSw4/verification-page.png" className="img-fluid rounded mb-3" alt="KYC verification page team room" />

        <h2>10. List a Space page</h2>
        <p><b>Purpose</b>: To let hosts add new meeting room</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Spaces/create.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Add new meeting room</li>
          <li>Upload meeting room images</li>
          <li>Add meeting room amenities</li>
          <li>Add meeting room description</li>
          <li>Add meeting room location</li>
          <li>Add meeting room price</li>
          <li>Add meeting room availability</li>
        </ul>
        <img src="https://i.ibb.co/rGmGZMjs/create-space-page.png" className="img-fluid rounded mb-3" alt="list a space page team room" />

        <h2>11. Edit a Space</h2>
        <p><b>Purpose</b>: To let hosts edit meeting room</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Spaces/edit.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Edit meeting room</li>
          <li>Upload meeting room images</li>
          <li>Edit meeting room amenities</li>
          <li>Edit meeting room description</li>
          <li>Edit meeting room location</li>
          <li>Edit meeting room price</li>
          <li>Edit meeting room availability</li>
        </ul>
        <img src="https://i.ibb.co/bgJr2p7y/edit-space-page.png" className="img-fluid rounded mb-3" alt="edit a space page team room" />

        <h2>12. Wishlist page</h2>
        <p><b>Purpose</b>: To let renter add meeting room to his wishlist</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/Users/wishlist.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Add meeting room to his wishlist</li>
          <li>Remove meeting room from his wishlist</li>
        </ul>
        <img src="https://i.ibb.co/gFfDyX94/wishlist-page.png" className="img-fluid rounded mb-3" alt="wishlist page team room" />

        <h2>13. About Us page</h2>
        <p><b>Purpose</b>: To show about us page</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/about.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Show Team Room details</li>
        </ul>
        <img src="https://i.ibb.co/rKnrYHyL/about-page.png" className="img-fluid rounded mb-3" alt="about us page team room" />

        <h2>14. Contact Us page</h2>
        <p><b>Purpose</b>: To let users contact throw email</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/contact.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Send email to Team Room</li>
        </ul>
        <img src="https://i.ibb.co/JwfvxSWx/contact-page.png" className="img-fluid rounded mb-3" alt="contact us page team room" />

        <h2>15. Terms of Service page</h2>
        <p><b>Purpose</b>: To let users know the website roles</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/terms.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Show website service roles</li>
        </ul>
        <img src="https://i.ibb.co/ZRtCgMLb/terms-page.png" className="img-fluid rounded mb-3" alt="terms of service page team room" />

        <h2>16. Privacy Policy page</h2>
        <p><b>Purpose</b>: To inform users how their data is transferred and protected</p>
        <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/Pages/privacy.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
        <p><b>Features</b></p>
        <ul>
          <li>Show website privacy polices</li>
        </ul>
        <img src="https://i.ibb.co/7x6VF5cg/privacy-page.png" className="img-fluid rounded mb-3" alt="privacy policy page team room" />
      </div>
    </>
  )
}