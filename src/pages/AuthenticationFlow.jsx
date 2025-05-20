import React from "react";

export default function AuthenticationFlow() {
  return (
    <>
      <div class="container my-5">
        <div class="card-body">
          <h1 class="display-4 card-title">
            User Authentication
          </h1>
          <h2 class="mt-4">Authentication Components</h2>

          <h5 class="mt-4">Database Schema</h5>
          <ul>
            <li>
              <strong>users</strong> – Stores user account information
              (fields: id, email, password, first_name, last_name, etc.)
            </li>
            <li>
              <strong>roles</strong> – Defines available user roles (fields:
              id, name)
            </li>
            <li>
              <strong>user_roles</strong> – Many-to-many relationship between
              users and roles (fields: user_id, role_id)
            </li>
          </ul>

          <h2 class="mt-4">Authentication Flow</h2>
          <h5>Registration Process</h5>
          <ol>
            <li>
              User submits registration form with personal details and role
              selection
            </li>
            <li>System validates input data</li>
            <li>
              If validation passes:
              <ul>
                <li>User record is created with hashed password</li>
                <li>
                  Default role is assigned based on selection (host or renter)
                </li>
                <li>User is authenticated and redirected to dashboard</li>
              </ul>
            </li>
          </ol>

          <h5 class="mt-4">Login Process</h5>
          <ol>
            <li>User submits login credentials (email and password)</li>
            <li>System attempts to authenticate the user</li>
            <li>
              If successful:
              <ul>
                <li>User session is created</li>
                <li>User is redirected to the appropriate dashboard</li>
              </ul>
            </li>
            <li>
              If failed:
              <ul>
                <li>Error message is displayed</li>
                <li>User remains on login page</li>
              </ul>
            </li>
          </ol>

          <h2 class="mt-4">Security Features</h2>
          <h5>Password Hashing</h5>
          <p>
            Passwords are securely hashed using Laravel's built-in{" "}
            <code>bcrypt</code> algorithm. This ensures that even if the
            database is compromised, the actual passwords remain secure.
          </p>

          <h5 class="mt-3">CSRF Protection</h5>
          <p>
            Cross-Site Request Forgery (CSRF) protection is implemented to
            prevent unauthorized actions. Tokens are generated and validated
            for each form submission. when using <code>@csrf</code>
          </p>

          <h5 class="mt-3">Session Management</h5>
          <p>
            Sessions are managed through Laravel's session system. Adjust
            settings in <code>config/session.php</code>.
          </p>

          <h2 class="mt-4">Authentication Routes</h2>
          <table class="table table-bordered">
            <thead class="table-light">
              <tr>
                <th>Route Name</th>
                <th>URI</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>login</td>
                <td>/login</td>
                <td>Display login form</td>
              </tr>
              <tr>
                <td>login.post</td>
                <td>/login</td>
                <td>Process login attempt</td>
              </tr>
              <tr>
                <td>logout</td>
                <td>/logout</td>
                <td>Log out current user</td>
              </tr>
              <tr>
                <td>register</td>
                <td>/register</td>
                <td>Display registration form</td>
              </tr>
              <tr>
                <td>register.post</td>
                <td>/register</td>
                <td>Process registration</td>
              </tr>
              <tr>
                <td>password.request</td>
                <td>/forgot-password</td>
                <td>Display password reset request</td>
              </tr>
              <tr>
                <td>password.email</td>
                <td>/forgot-password</td>
                <td>Send reset link</td>
              </tr>
              <tr>
                <td>password.reset</td>
                <td>/reset-password/token</td>
                <td>Display reset form</td>
              </tr>
              <tr>
                <td>password.update</td>
                <td>/reset-password</td>
                <td>Process password reset</td>
              </tr>
            </tbody>
          </table>

          <h2 class="mt-4">Implementation Details</h2>
          <ul>
            <li>
              <code>AuthenticatedSessionController</code> – Handles user login
              and logout
            </li>
            <li>
              <code>RegisteredUserController</code> – Manages user
              registration
            </li>
            <li>
              <code>PasswordResetLinkControllerr</code> – Handles password
              reset requests
            </li>
            <li>
              <code>PasswordController</code> – Processes password resets
            </li>
          </ul>

          <h5 class="mt-3">Middleware</h5>
          <ul>
            <li>
              <code>Authenticate</code> – Ensures user is logged in
            </li>
            <li>
              <code>RedirectIfAuthenticated</code> – Redirects authenticated
              users
            </li>
            <li>
              <code>EnsureUserHasRole</code> – Confirms role for protected
              routes
            </li>
          </ul>

          <h4 class="mb-4">
            Extending the Authentication System (Laravel 11)
          </h4>

          <h5 class="text-secondary">Adding New Roles</h5>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              Insert the new role into the <code>roles</code> table.
            </li>
            <li class="list-group-item">
              Update the registration form to allow selection of the new role.
            </li>
            <li class="list-group-item">
              Modify controller logic or middleware to support role-specific
              behavior.
            </li>
          </ul>

          <h5 class="text-secondary">Custom Authentication Rules</h5>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              If using <strong>Breeze</strong>: Override methods in{" "}
              <code>AuthenticatedSessionController</code>.
            </li>
            <li class="list-group-item">
              Add logic to restrict login based on user status, role, or other
              conditions.
            </li>
          </ul>

          <h5 class="text-secondary">Troubleshooting</h5>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Invalid Credentials</strong>: Verify the user’s
              email/password and account status.
            </li>
            <li class="list-group-item">
              <strong>Session Expiration</strong>: Adjust session lifetime in{" "}
              <code>config/session.php</code>.
            </li>
            <li class="list-group-item">
              <strong>Role-Based Access Denied</strong>: Ensure the user has
              the required role and middleware is properly configured.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
