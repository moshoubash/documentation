import React from "react";

export default function Authentication() {
    return (
        <>
            <div class="container my-5">
                <h1 class="display-4">
                    Authentication Pages
                </h1>
                <p class="text-muted">
                    All of these pages have been developed using Breeze and Tailwind
                </p>
                <h2>1. Login Page</h2>
                <p><b>Purpose</b>: Allow users to securely log in using their email and password.</p>
                <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/auth/login.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
                <p><b>Features</b></p>
                <ul>
                    <li>Secure login using email and password.</li>
                    <li>Option to reset password.</li>
                    <li>Option to register for a new account.</li>
                </ul>
                <img src="https://i.ibb.co/4g5wg1gG/login-page.png" className="img-fluid rounded mb-3" alt="login page team room" />
                <h2>2. Register Page</h2>
                <p><b>Purpose</b>: Allow users to create a new account by providing their email, password, and other necessary information.</p>
                <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/auth/register.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
                <p><b>Features</b></p>
                <ul>
                    <li>Secure registration process.</li>
                    <li>Validation of user input.</li>
                    <li>Option to log in after registration.</li>
                </ul>
                <img src="https://i.ibb.co/bRdJgNvj/register.png" className="img-fluid rounded mb-3" alt="register page team room" />
                <h2>3. Forgot Password Page</h2>
                <p><b>Purpose</b>: Allow users to reset their password by providing their email address.</p>
                <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/auth/forgot-password.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
                <p><b>Features</b></p>
                <ul>
                    <li>Validation of user email.</li>
                    <li>Secure password reset process.</li>
                </ul>
                <img src="https://i.ibb.co/JFyH0zgz/forgot-password.png" className="img-fluid rounded mb-3" alt="forget password page team room" />
                <h2>4. Reset Password Page</h2>
                <p><b>Purpose</b>: Allow users to set a new password after resetting their password.</p>
                <a href="https://github.com/moshoubash/Masterpiece-TeamRoom/blob/main/resources/views/auth/reset-password.blade.php" className="btn btn-outline-dark mb-2"><i className="fa-brands fa-github"></i> Source Code</a>
                <p><b>Features</b></p>
                <ul>
                    <li>Secure password reset process.</li>
                    <li>Validation of user email.</li>
                    <li>Validation of user password.</li>
                </ul>
                <img src="https://i.ibb.co/5hS5bmkt/reset-password.png" className="img-fluid rounded mb-3" alt="reset password page team room" />
            </div>
        </>
    );
}