import React from "react";

export default function AuthenticationProcess() {
  return (
    <div class="container my-5">
      <h3 class="display-4 mb-4">Authentication Process</h3>
      <img src="authentication-flow.svg" alt="Authentication flow" className="img-fluid mb-4" />
      <p>
        The authentication system is implemented using <strong>Laravel Breeze</strong>, a lightweight and clean starter kit for Laravel applications. It handles registration, login, logout, password reset, email verification, and session management.
      </p>

      <h5 class="mt-4">Key Components</h5>
      <ul>
        <li><code>users</code>: Stores core user details and credentials</li>
        <li><code>sessions</code>: Manages active user sessions</li>
        <li><code>activities</code>: Logs actions such as login/logout</li>
        <li><code>roles</code>: Defines available roles in the system</li>
        <li><code>user_roles</code>: Pivot table to assign one or more roles to each user</li>
      </ul>

      <h5 class="mt-4">Controllers & Middleware</h5>
      <p>
        Laravel Breeze generates authentication controllers under <code>App\Http\Controllers\Auth</code> including:
      </p>
      <ul>
        <li><code>RegisteredUserController</code> – handles user registration</li>
        <li><code>AuthenticatedSessionController</code> – handles login/logout</li>
        <li><code>PasswordResetLinkController</code>, <code>NewPasswordController</code> – manage password reset</li>
        <li><code>EmailVerificationNotificationController</code> – handles email verification</li>
      </ul>

      <h5 class="mt-4">Authentication Flow (Using Breeze)</h5>
      <ol>
        <li>User submits login or registration form via Breeze routes.</li>
        <li>Credentials are validated and hashed using Laravel’s built-in hash system (bcrypt).</li>
        <li>If login is successful, Laravel creates a session stored in the <code>sessions</code> table.</li>
        <li>User activities like login/logout are logged in the <code>activities</code> table.</li>
        <li>Each user can have one or more roles via the <code>user_roles</code> pivot table linked to the <code>roles</code> table.</li>
      </ol>

      <h5 class="mt-4">Role Management</h5>
      <p>
        A custom role system enhances user access control:
      </p>
      <ul>
        <li><code>roles</code> table defines role types like <code>admin</code>, <code>host</code>, <code>renter</code>.</li>
        <li><code>user_roles</code> table links each user to one or more roles.</li>
        <li>Used for route protection and feature toggling based on user type.</li>
      </ul>

      <h5 class="mt-4">Security Features</h5>
      <ul>
        <li>Secure password hashing with bcrypt</li>
        <li>CSRF and session protection via Laravel’s built-in middleware</li>
        <li>Email verification and password reset via signed URLs</li>
        <li>Activity logging for audit trails</li>
      </ul>
    </div>

  );
}