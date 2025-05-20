import React from 'react';

export default function Middlewares() {
    return (
        <div class="container py-5">
            <h2 class="mb-4 display-4">Middlewares</h2>
            <a className='btn btn-outline-dark mb-4' href="https://github.com/moshoubash/Masterpiece-TeamRoom/tree/main/app/Http/Middleware"><i className='fa-brands fa-github'></i> Github Middlewares</a>
            <div class="card-body">
                <h5 class="card-title text-primary">CheckAdminMiddleware</h5>
                <p class="card-text">Restricts access to users with <code>admin</code> or <code>superadmin</code> roles.</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Access:</strong> admin, superadmin</li>
                    <li class="list-group-item"><strong>Denied:</strong> All others</li>
                    <li class="list-group-item"><strong>Usage:</strong> Protect admin routes</li>
                </ul>
            </div>

            <hr className='my-4'/>

            <div class="card-body">
                <h5 class="card-title text-primary">CheckHostMiddleware</h5>
                <p class="card-text">Allows only users with the <code>host</code> role to access certain routes.</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Access:</strong> host</li>
                    <li class="list-group-item"><strong>Denied:</strong> All others</li>
                    <li class="list-group-item"><strong>Usage:</strong> Host-only pages like listings</li>
                </ul>
            </div>

            <hr className='my-4'/>

            <div class="card-body">
                <h5 class="card-title text-primary">CheckSuperAdminMiddleware</h5>
                <p class="card-text">Only users with <code>superadmin</code> role can access these routes.</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Access:</strong> superadmin</li>
                    <li class="list-group-item"><strong>Denied:</strong> All others</li>
                    <li class="list-group-item"><strong>Usage:</strong> Critical system settings</li>
                </ul>
            </div>

            <hr className='my-4'/>

            <div class="card-body">
                <h5 class="card-title text-primary">EnsureKycIsApproved</h5>
                <p class="card-text">Restricts actions unless the user's KYC is approved.</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Access:</strong> Users with <code>kyc_status = 'approved'</code></li>
                    <li class="list-group-item"><strong>Denied:</strong> Guests, unverified users</li>
                    <li class="list-group-item"><strong>Usage:</strong> Listing spaces, making bookings</li>
                </ul>
            </div>
        </div>
    )
}