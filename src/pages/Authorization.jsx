import React from "react";

export default function Authorization() {
  return (
    <div class="container my-5">
      <h1 class="display-4 mb-3">Authorization Process</h1>

      <img
        src="../assets/images/authorization-process.svg"
        alt="Authorization process in Team Room"
        className="img-fluid mb-4"
      />

      <p>
        Authorization is handled through a custom role-based access control
        (RBAC) system. Each user can be assigned one or more roles using a pivot
        table. Access to features and routes is restricted based on these roles.
      </p>

      <h5 class="mt-4">Key Tables</h5>
      <ul>
        <li>
          <code>roles</code>: Defines available system roles (e.g., admin, host,
          renter)
        </li>
        <li>
          <code>user_roles</code>: Links users to roles using a many-to-many
          relationship
        </li>
        <li>
          <code>users</code>: Authenticated users are authorized by checking
          their roles
        </li>
      </ul>

      <h5 class="mt-4">Authorization Flow</h5>
      <ol>
        <li>
          After login, the system fetches the user’s roles via the{" "}
          <code>user_roles</code> pivot table.
        </li>
        <li>
          Routes or controllers are protected using middleware or custom
          gates/policies.
        </li>
        <li>
          If a user tries to access a restricted resource, the system checks if
          their role matches the allowed roles.
        </li>
        <li>
          If authorized, access is granted. If not, a 403 Forbidden response is
          returned.
        </li>
      </ol>

      <h5 class="mt-4">Implementation Details</h5>
      <ul>
        <li>
          Middleware like <code>role:admin</code> can be created to restrict
          access to specific user roles.
        </li>
        <li>
          Custom Blade directives or helper methods (e.g.{" "}
          <code>@hasRole('admin')</code>) can be used in views.
        </li>
        <li>
          Authorization logic can also be implemented via Laravel’s{" "}
          <code>Gate</code> or <code>Policy</code> classes for model-level
          control.
        </li>
      </ul>

      <h5 class="mt-4">Security Notes</h5>
      <ul>
        <li>
          Authorization checks should be enforced on both routes and
          controllers.
        </li>
        <li>
          Roles should be verified after login and cached for performance.
        </li>
        <li>
          Always use server-side checks; front-end visibility is not secure
          enough alone.
        </li>
      </ul>
    </div>
  );
}
