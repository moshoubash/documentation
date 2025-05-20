import React from 'react';

export default function Controllers() {
    return (
        <div class="container py-5">
            <h1 class='display-4 mb-4'>Controllers</h1>
            <a class='btn btn-outline-dark mb-4' href="https://github.com/moshoubash/Masterpiece-TeamRoom/tree/main/app/Http/Controllers"><i className='fa-brands fa-github'></i> Github Controllers</a>

            {/* Table of Content */}

            <div className="shadow-sm mb-5">
                <h5>Table of Content</h5>
                <div className="list-group">
                    <a href="#activity-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        ActivityController
                        <span className="badge bg-primary rounded-pill">4 methods</span>
                    </a>
                    <a href="#booking-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        BookingController
                        <span className="badge bg-primary rounded-pill">11 methods</span>
                    </a>
                    <a href="#company-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        CompanyController
                        <span className="badge bg-primary rounded-pill">6 methods</span>
                    </a>

                    <a href="#admin-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        AdminController
                        <span className="badge bg-primary rounded-pill">2 methods</span>
                    </a>

                    <a href="#contact-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        ContactController
                        <span className="badge bg-primary rounded-pill">1 method</span>
                    </a>

                    <a href="#dashboard-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        DashboardController
                        <span className="badge bg-primary rounded-pill">2 methods</span>
                    </a>

                    <a href="#home-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        HomeController
                        <span className="badge bg-primary rounded-pill">1 method</span>
                    </a>

                    <a href="#notification-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        NotificationController
                        <span className="badge bg-primary rounded-pill">6 methods</span>
                    </a>

                    <a href="#payment-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        PaymentController
                        <span className="badge bg-primary rounded-pill">4 methods</span>
                    </a>

                    <a href="#profile-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        ProfileController
                        <span className="badge bg-primary rounded-pill">3 methods</span>
                    </a>

                    <a href="#report-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        ReportController
                        <span className="badge bg-primary rounded-pill">3 methods</span>
                    </a>

                    <a href="#review-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        ReviewController
                        <span className="badge bg-primary rounded-pill">4 methods</span>
                    </a>

                    <a href="#role-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        RoleController
                        <span className="badge bg-primary rounded-pill">5 methods</span>
                    </a>

                    <a href="#transaction-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        TransactionController
                        <span className="badge bg-primary rounded-pill">6 methods</span>
                    </a>

                    <a href="#verification-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        VerificationController
                        <span className="badge bg-primary rounded-pill">5 methods</span>
                    </a>

                    <a href="#wishlist-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        WishlistController
                        <span className="badge bg-primary rounded-pill">3 methods</span>
                    </a>

                    <a href="#space-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        SpaceController
                        <span className="badge bg-primary rounded-pill">12 methods</span>
                    </a>

                    <a href="#user-controller" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        UserController
                        <span className="badge bg-primary rounded-pill">16 methods</span>
                    </a>
                </div>
            </div>

            {/* Activity Controller */}

            <h2 class="mb-4" id='activity-controller'>ActivityController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\ActivityController</code></p>
                </div>
            </div>

            <div class="accordion" id="controllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Displays a paginated list of activities.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /activities</code></li>
                                <li><strong>Returns:</strong> <code>dashboard.activities.index</code> view</li>
                                <li><strong>Pagination:</strong> 10 per page</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingStore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStore">
                            store(Request $request)
                        </button>
                    </h2>
                    <div id="collapseStore" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Stores a new activity.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /activities</code></li>
                                <li><strong>Parameters:</strong> All request fields via <code>$request->all()</code></li>
                                <li><strong>Returns:</strong> Redirects back</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Deletes a specific activity.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>DELETE /activities/id</code></li>
                                <li><strong>Lookup:</strong> Uses <code>Activity::find($id)</code></li>
                                <li><strong>Returns:</strong> Redirects back with success message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFilter">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter">
                            filter($type)
                        </button>
                    </h2>
                    <div id="collapseFilter" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Filters activities by type.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /activities/filter/type</code></li>
                                <li><strong>Logic:</strong> <code>Activity::where('type', $type)</code></li>
                                <li><strong>Returns:</strong> <code>dashboard.activities.index</code> view with filtered results</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Controller */}

            <h2 class="my-4" id='booking-controller'>BookingController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\BookingController</code></p>
                </div>
            </div>

            <div class="accordion" id="controllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Lists all bookings paginated (10 per page).</p>
                            <strong>View:</strong> <code>dashboard.booking.index</code>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingShow">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShow">
                            show(int $id)
                        </button>
                    </h2>
                    <div id="collapseShow" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Shows a specific booking.</p>
                            <strong>View:</strong> <code>dashboard.booking.show</code>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEdit">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEdit">
                            edit(int $id)
                        </button>
                    </h2>
                    <div id="collapseEdit" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Returns a form to edit a booking.</p>
                            <strong>View:</strong> <code>dashboard.booking.edit</code>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdate">
                            update(Request $request, string $id)
                        </button>
                    </h2>
                    <div id="collapseUpdate" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Updates a booking with new data.</p>
                            <strong>Returns:</strong> Redirects back.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Deletes a booking if no related transactions exist.</p>
                            <strong>Returns:</strong> Redirects back with a message if deletion not allowed.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingStore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStore">
                            store(Request $request)
                        </button>
                    </h2>
                    <div id="collapseStore" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Creates a new booking using start and end time from request.</p>
                            <strong>Fields:</strong> <code>space_id, renter_id, start_datetime, end_datetime, total_price, host_payout</code>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingInfo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInfo">
                            info(string $id)
                        </button>
                    </h2>
                    <div id="collapseInfo" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Shows booking details to renter with refund eligibility if booking is less than 24 hours old and hasn't started yet.</p>
                            <strong>View:</strong> <code>pages.users.bookings.details</code> or <code>pages.404</code>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFilter">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter">
                            filter(string $status)
                        </button>
                    </h2>
                    <div id="collapseFilter" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Filters bookings by their status.</p>
                            <strong>View:</strong> <code>dashboard.booking.index</code>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingApprove">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseApprove">
                            approve(int $id)
                        </button>
                    </h2>
                    <div id="collapseApprove" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Sets the booking status to <code>confirmed</code> and notifies the renter.</p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingReject">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReject">
                            reject(int $id)
                        </button>
                    </h2>
                    <div id="collapseReject" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Sets the booking status to <code>cancelled</code> and notifies the renter.</p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingComplete">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseComplete">
                            complete(int $id)
                        </button>
                    </h2>
                    <div id="collapseComplete" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Marks the booking as <code>completed</code>.</p>
                            <strong>Returns:</strong> Redirects back with success message.
                        </div>
                    </div>
                </div>

            </div>

            {/* Company Controller */}

            <h2 class="my-4" id='company-controller'>CompanyController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\CompanyController</code></p>
                </div>
            </div>

            <div class="accordion" id="controllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Displays a paginated list of companies with available city filters.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /companies</code></li>
                                <li><strong>Returns:</strong> <code>dashboard.companies.index</code> view</li>
                                <li><strong>Pagination:</strong> 10 per page</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingCreate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCreate">
                            create()
                        </button>
                    </h2>
                    <div id="collapseCreate" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Shows the form for creating a new company.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /companies/create</code></li>
                                <li><strong>Returns:</strong> <code>dashboard.companies.create</code> view</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingStore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStore">
                            store(Request $request)
                        </button>
                    </h2>
                    <div id="collapseStore" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Stores a new company along with the initial host user.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /companies</code></li>
                                <li><strong>Validates:</strong> Multiple company and host fields</li>
                                <li><strong>Logic:</strong> Creates company and associated host user</li>
                                <li><strong>Returns:</strong> Redirects back with success or error message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingShow">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShow">
                            show(Company $company)
                        </button>
                    </h2>
                    <div id="collapseShow" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Displays a specific company’s details.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /companies/company</code></li>
                                <li><strong>Returns:</strong> <code>dashboard.companies.show</code> view</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEdit">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEdit">
                            edit(Company $company)
                        </button>
                    </h2>
                    <div id="collapseEdit" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Shows the form for editing a specific company.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /companies/company/edit</code></li>
                                <li><strong>Returns:</strong> <code>dashboard.companies.edit</code> view</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdate">
                            update(Request $request, Company $company)
                        </button>
                    </h2>
                    <div id="collapseUpdate" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Updates the specified company’s data.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>PUT /companies/company</code></li>
                                <li><strong>Validates:</strong> Company fields including optional logo</li>
                                <li><strong>Returns:</strong> Redirects back with success message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Deletes a specific company.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>DELETE /companies/id</code></li>
                                <li><strong>Lookup:</strong> Uses <code>Company::findOrFail($id)</code></li>
                                <li><strong>Returns:</strong> Redirects back or to index with message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFilter">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter">
                            filter(Request $request)
                        </button>
                    </h2>
                    <div id="collapseFilter" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Filters companies based on search or sort parameters.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /companies/filter</code></li>
                                <li><strong>Searches:</strong> name, email, phone, website, city</li>
                                <li><strong>Returns:</strong> Filtered results (implementation-dependent)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Admin Controller */}

            <h2 id='admin-controller' class="my-4">AdminController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\AdminController</code></p>
                </div>
            </div>

            <div class="accordion" id="controllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Displays a paginated list of users with roles <code>admin</code> or <code>superadmin</code>.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /admin</code></li>
                                <li><strong>Logic:</strong> Uses <code>whereHas</code> on roles relationship</li>
                                <li><strong>Pagination:</strong> 10 per page</li>
                                <li><strong>Returns:</strong> <code>dashboard.admins.index</code> view</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingChangeRole">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChangeRole">
                            changeRole(Request $request)
                        </button>
                    </h2>
                    <div id="collapseChangeRole" class="accordion-collapse collapse" data-bs-parent="#controllerMethods">
                        <div class="accordion-body">
                            <p>Changes the role of a user to either <code>admin</code> or <code>superadmin</code>.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /admin/change-role</code></li>
                                <li><strong>Parameters:</strong>
                                    <ul>
                                        <li><code>user_id</code> - ID of the user to update</li>
                                        <li><code>role</code> - Role to assign (<code>admin</code> or <code>superadmin</code>)</li>
                                    </ul>
                                </li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Checks current role to avoid redundant updates</li>
                                        <li>Uses <code>sync()</code> on roles relationship</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong>
                                    <ul>
                                        <li>Redirects back with message if already has the role</li>
                                        <li>Redirects back on success</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Contact Controller */}

            <h2 id='contact-controller' class="my-4">ContactController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\ContactController</code></p>
                </div>
            </div>

            <div class="accordion" id="contactControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSend">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSend">
                            send(Request $request)
                        </button>
                    </h2>
                    <div id="collapseSend" class="accordion-collapse collapse show" data-bs-parent="#contactControllerMethods">
                        <div class="accordion-body">
                            <p>Handles contact form submissions and sends an email using the provided form data.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /contact/send</code></li>
                                <li><strong>Validation:</strong>
                                    <ul>
                                        <li><code>name</code> - required, string, max 255</li>
                                        <li><code>email</code> - required, valid email</li>
                                        <li><code>subject</code> - required, string, max 255</li>
                                        <li><code>message</code> - required, string</li>
                                    </ul>
                                </li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Validates input data</li>
                                        <li>Uses Carbon to get the current formatted date</li>
                                        <li>Sends an email using the <code>Mail::send()</code> method</li>
                                        <li>Includes <code>replyTo</code> header with sender's email</li>
                                    </ul>
                                </li>
                                <li><strong>View Used:</strong> <code>Pages.Mail.template</code></li>
                                <li><strong>Returns:</strong> Redirects back with a success flash message</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Dashboard Controller */}

            <h2 id='dashboard-controller' class="my-4">DashboardController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\DashboardController</code></p>
                </div>
            </div>

            <div class="accordion" id="dashboardControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#dashboardControllerMethods">
                        <div class="accordion-body">
                            <p>Displays the main dashboard with various aggregated statistics and charts.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /dashboard</code></li>
                                <li><strong>Authorization:</strong> Only users with roles <code>admin</code> or <code>superadmin</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Calculates total revenue, users, active spaces, and bookings</li>
                                        <li>Retrieves daily revenue for chart display</li>
                                        <li>Fetches top booked spaces for analytics</li>
                                        <li>Paginates list of spaces</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>dashboard</code> view with data for charts and tables</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSearch">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSearch">
                            search(Request $request)
                        </button>
                    </h2>
                    <div id="collapseSearch" class="accordion-collapse collapse" data-bs-parent="#dashboardControllerMethods">
                        <div class="accordion-body">
                            <p>Redirects the admin to the appropriate dashboard section based on a keyword search.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /dashboard/search</code></li>
                                <li><strong>Parameters:</strong>
                                    <ul>
                                        <li><code>search</code> - keyword used to determine redirection target</li>
                                    </ul>
                                </li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Checks for keywords like <code>space</code>, <code>user</code>, <code>booking</code>, <code>review</code>, etc.</li>
                                        <li>Redirects to the corresponding section of the dashboard</li>
                                        <li>If keyword not matched, redirects back to <code>index</code> with a warning message</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirect to relevant dashboard section or back to <code>index</code></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Home Controller */}

            <h2 id='home-controller' class="my-4">HomeController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\HomeController</code></p>
                </div>
            </div>

            <div class="accordion" id="homeControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#homeControllerMethods">
                        <div class="accordion-body">
                            <p>Displays the homepage with a preview list of meeting rooms.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Fetches the first 5 meeting room entries from the <code>spaces</code> table</li>
                                        <li>Uses the <code>Space</code> model to retrieve data</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>welcome</code> view with a <code>meetingRooms</code> variable</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Notification Controller */}

            <h2 id='notification-controller' class="my-4">NotificationController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\NotificationController</code></p>
                </div>
            </div>

            <div class="accordion" id="notificationControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#notificationControllerMethods">
                        <div class="accordion-body">
                            <p>Displays paginated notifications for the currently authenticated user.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /dashboard/notifications</code></li>
                                <li><strong>Returns:</strong> <code>dashboard.notifications.index</code> view with notifications and users</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingStore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStore">
                            store(Request $request)
                        </button>
                    </h2>
                    <div id="collapseStore" class="accordion-collapse collapse" data-bs-parent="#notificationControllerMethods">
                        <div class="accordion-body">
                            <p>Stores a new notification in the database.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /dashboard/notifications</code></li>
                                <li><strong>Logic:</strong> Uses <code>Notification::create()</code> with all request data</li>
                                <li><strong>Returns:</strong> Redirects back with a success message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFilter">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter">
                            filter(Request $request)
                        </button>
                    </h2>
                    <div id="collapseFilter" class="accordion-collapse collapse" data-bs-parent="#notificationControllerMethods">
                        <div class="accordion-body">
                            <p>Filters notifications based on status, keyword, and type.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /dashboard/notifications/filter</code></li>
                                <li><strong>Filters:</strong>
                                    <ul>
                                        <li><code>status</code> - 'read' or 'unread'</li>
                                        <li><code>search</code> - matches <code>user_id</code> or <code>notification_type</code></li>
                                        <li><code>type</code> - matches exact <code>notification_type</code></li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>dashboard.notifications.index</code> view with filtered results</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingMarkAsRead">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMarkAsRead">
                            markAsRead(Request $request)
                        </button>
                    </h2>
                    <div id="collapseMarkAsRead" class="accordion-collapse collapse" data-bs-parent="#notificationControllerMethods">
                        <div class="accordion-body">
                            <p>Marks a specific notification as read.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /dashboard/notifications/read</code></li>
                                <li><strong>Logic:</strong> Finds the notification by ID and updates <code>is_read</code> to true</li>
                                <li><strong>Returns:</strong> Redirects back</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#notificationControllerMethods">
                        <div class="accordion-body">
                            <p>Deletes a specific notification.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>DELETE /dashboard/notifications/id</code></li>
                                <li><strong>Logic:</strong> Finds the notification and deletes it</li>
                                <li><strong>Returns:</strong> Redirects back</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingMarkAllAsRead">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMarkAllAsRead">
                            markAllAsRead(string $id)
                        </button>
                    </h2>
                    <div id="collapseMarkAllAsRead" class="accordion-collapse collapse" data-bs-parent="#notificationControllerMethods">
                        <div class="accordion-body">
                            <p>Marks all notifications for a specific user as read.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /dashboard/notifications/read-all/id</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the user by ID</li>
                                        <li>Loops through all the user's notifications and updates <code>is_read</code> to true</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Payment Controller */}

            <h2 id='payment-controller' class="my-4">PaymentController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\PaymentController</code></p>
                </div>
            </div>

            <div class="accordion" id="paymentControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingCheckout">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCheckout" aria-expanded="true" aria-controls="collapseCheckout">
                            checkout(Request $request)
                        </button>
                    </h2>
                    <div id="collapseCheckout" class="accordion-collapse collapse show" aria-labelledby="headingCheckout" data-bs-parent="#paymentControllerMethods">
                        <div class="accordion-body">
                            <p>Prepares booking date and time details, then loads the payment checkout view.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>GET /payment/checkout</code></li>
                                <li><strong>Parameters:</strong>
                                    <ul>
                                        <li><code>start_time</code>, <code>end_time</code>, <code>date</code> (from user input)</li>
                                    </ul>
                                </li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Combines date and time inputs into full datetime strings</li>
                                        <li>Merges new datetime values back into the request</li>
                                        <li>Passes the request data to the checkout view</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>pages.payment.checkout</code> view with booking info</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingProcess">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProcess" aria-expanded="false" aria-controls="collapseProcess">
                            process(Request $request)
                        </button>
                    </h2>
                    <div id="collapseProcess" class="accordion-collapse collapse" aria-labelledby="headingProcess" data-bs-parent="#paymentControllerMethods">
                        <div class="accordion-body">
                            <p>Handles payment via Stripe, creates booking, transaction, notifications, and triggers booking confirmation.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>POST /payment/process</code></li>
                                <li><strong>Parameters:</strong>
                                    <ul>
                                        <li>Payment and booking details including <code>total_price</code>, <code>payment_method_id</code>, <code>space_id</code>, <code>date</code>, etc.</li>
                                    </ul>
                                </li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Sets Stripe API key</li>
                                        <li>Creates a Stripe PaymentIntent with automatic payment methods enabled</li>
                                        <li>Checks if further action is required (e.g., 3D Secure) and returns client secret if so</li>
                                        <li>Creates a Booking record with status <code>pending</code></li>
                                        <li>Sends email notification to the space host</li>
                                        <li>Creates a Transaction record for payment</li>
                                        <li>Creates a Notification for the host</li>
                                        <li>Logs a new activity for booking creation</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects to booking confirmation page on success; returns back with errors on failure</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingConfirmation">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConfirmation" aria-expanded="false" aria-controls="collapseConfirmation">
                            confirmation($bookingId)
                        </button>
                    </h2>
                    <div id="collapseConfirmation" class="accordion-collapse collapse" aria-labelledby="headingConfirmation" data-bs-parent="#paymentControllerMethods">
                        <div class="accordion-body">
                            <p>Displays the confirmation page for a specific booking.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /payment/confirmation/bookingId</code></li>
                                <li><strong>Parameters:</strong> <code>bookingId</code> (booking identifier)</li>
                                <li><strong>Logic:</strong> Retrieves the booking by ID and passes it to the view</li>
                                <li><strong>Returns:</strong> <code>pages.payment.confirmation</code> view with booking details</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingRefund">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRefund" aria-expanded="false" aria-controls="collapseRefund">
                            refund(Request $request, Booking $booking)
                        </button>
                    </h2>
                    <div id="collapseRefund" class="accordion-collapse collapse" aria-labelledby="headingRefund" data-bs-parent="#paymentControllerMethods">
                        <div class="accordion-body">
                            <p>Processes a refund via Stripe for a given booking, updates booking and transaction status, and notifies the user.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /payment/refund/booking</code></li>
                                <li><strong>Parameters:</strong>
                                    <ul>
                                        <li><code>cancellation_reason</code> - reason for refund</li>
                                        <li><code>cancelled_by</code> - who cancelled the booking</li>
                                        <li><code>booking</code> - Booking model instance</li>
                                    </ul>
                                </li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds related transaction by booking ID</li>
                                        <li>Sets Stripe API key</li>
                                        <li>Creates a Stripe refund for the payment intent</li>
                                        <li>Updates booking status to <code>cancelled</code> with cancellation details</li>
                                        <li>Creates a refund transaction with status <code>failed</code> (might consider updating to <code>completed</code>)</li>
                                        <li>Creates notification for renter about refund status</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back with success or error message</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Profile Controller */}

            <h2 id='profile-controller' class="my-4">ProfileController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\ProfileController</code></p>
                </div>
            </div>

            <div class="accordion" id="profileControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEdit">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEdit">
                            edit(Request $request): View
                        </button>
                    </h2>
                    <div id="collapseEdit" class="accordion-collapse collapse show" data-bs-parent="#profileControllerMethods">
                        <div class="accordion-body">
                            <p>Displays the authenticated user's profile edit form.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /profile/edit</code></li>
                                <li><strong>Parameters:</strong> <code>Request $request</code> - contains the authenticated user</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Retrieves the current user from the request</li>
                                        <li>Passes the user data to the <code>profile.edit</code> view</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> The view <code>profile.edit</code> with the user's data</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdate">
                            update(ProfileUpdateRequest $request): RedirectResponse
                        </button>
                    </h2>
                    <div id="collapseUpdate" class="accordion-collapse collapse" data-bs-parent="#profileControllerMethods">
                        <div class="accordion-body">
                            <p>Validates and updates the authenticated user's profile information.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>PUT/PATCH /profile</code></li>
                                <li><strong>Parameters:</strong> <code>ProfileUpdateRequest $request</code> - validated request data for profile update</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Fills the user model with validated data</li>
                                        <li>If the email is changed, resets email verification</li>
                                        <li>Saves the updated user model</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back to <code>profile.edit</code> route with a success status message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(Request $request): RedirectResponse
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#profileControllerMethods">
                        <div class="accordion-body">
                            <p>Deletes the authenticated user's account after validating the current password.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>DELETE /profile</code></li>
                                <li><strong>Parameters:</strong> <code>Request $request</code> - request with password validation</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Validates the password with the current authenticated user</li>
                                        <li>Logs out the user</li>
                                        <li>Deletes the user account</li>
                                        <li>Invalidates and regenerates the session token</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects to the homepage <code>/</code></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Report Controller */}

            <h2 id='report-controller' class="my-4">ReportController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\ReportController</code></p>
                </div>
            </div>

            <div class="accordion" id="reportControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingExportExcel">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExportExcel">
                            exportExcel($table)
                        </button>
                    </h2>
                    <div id="collapseExportExcel" class="accordion-collapse collapse show" data-bs-parent="#reportControllerMethods">
                        <div class="accordion-body">
                            <p>Exports data from a given table as an Excel (.xlsx) file.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>GET /report/export-excel/tableName</code></li>
                                <li><strong>Parameters:</strong> <code>$table</code> - The name of the database table to export</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Checks if the table exists in the database schema; aborts with 404 if not found</li>
                                        <li>Retrieves all data from the specified table</li>
                                        <li>Uses <code>DynamicExport</code> class to format data for export</li>
                                        <li>Downloads the data as an Excel file named <code>tableName.xlsx</code></li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Excel file download response</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingExportCsv">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExportCsv">
                            exportCsv($table)
                        </button>
                    </h2>
                    <div id="collapseExportCsv" class="accordion-collapse collapse" data-bs-parent="#reportControllerMethods">
                        <div class="accordion-body">
                            <p>Exports data from a given table as a CSV file.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>GET /report/export-csv/tableName</code></li>
                                <li><strong>Parameters:</strong> <code>$table</code> - The database table name to export</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Validates table existence; aborts if not found</li>
                                        <li>Fetches all records from the table</li>
                                        <li>Uses <code>DynamicExport</code> for CSV formatting</li>
                                        <li>Downloads the CSV file named <code>tableName.csv</code></li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> CSV file download response</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingExportPdf">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExportPdf">
                            exportPdf($table)
                        </button>
                    </h2>
                    <div id="collapseExportPdf" class="accordion-collapse collapse" data-bs-parent="#reportControllerMethods">
                        <div class="accordion-body">
                            <p>Exports data from a given table as a PDF document.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>GET /report/export-pdf/tableName</code></li>
                                <li><strong>Parameters:</strong> <code>$table</code> - The name of the table</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Checks if the table exists; aborts 404 if not</li>
                                        <li>If the table is <code>companies</code>, selects a specific subset of columns</li>
                                        <li>Otherwise, fetches all data from the table</li>
                                        <li>Loads a PDF view <code>pdf.dynamic</code> with the data and table name</li>
                                        <li>Sets paper size to A4 portrait and enables HTML5 parsing and remote resources</li>
                                        <li>Triggers the download of the generated PDF file named <code>tableName.pdf</code></li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> PDF file download response</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Review Controller */}

            <h2 id='review-controller' class="my-4">ReviewController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\ReviewController</code></p>
                </div>
            </div>

            <div class="accordion" id="reviewControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#reviewControllerMethods">
                        <div class="accordion-body">
                            <p>Displays a paginated list of reviews.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>GET /reviews</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Fetches reviews with pagination (10 per page)</li>
                                        <li>Returns view <code>dashboard.reviews.index</code> with the reviews data</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View with paginated reviews</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#reviewControllerMethods">
                        <div class="accordion-body">
                            <p>Deletes a review by its ID.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>DELETE /reviews/id</code></li>
                                <li><strong>Parameters:</strong> <code>$id</code> - The review's ID</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the review by ID</li>
                                        <li>Deletes the review record</li>
                                        <li>Redirects back to the previous page</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirect back response</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFilter">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter">
                            filter($review)
                        </button>
                    </h2>
                    <div id="collapseFilter" class="accordion-collapse collapse" data-bs-parent="#reviewControllerMethods">
                        <div class="accordion-body">
                            <p>Filters reviews by rating using a partial match.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>GET /reviews/filter/review</code></li>
                                <li><strong>Parameters:</strong> <code>$review</code> - Rating filter string</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Queries reviews where the rating matches the filter string (using LIKE)</li>
                                        <li>Paginates results with 10 per page</li>
                                        <li>Returns view <code>dashboard.reviews.index</code> with filtered reviews</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View with filtered reviews</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingStore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStore">
                            store(Request $request, $id)
                        </button>
                    </h2>
                    <div id="collapseStore" class="accordion-collapse collapse" data-bs-parent="#reviewControllerMethods">
                        <div class="accordion-body">
                            <p>Stores a new review related to a booking and creates a notification for the host.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>POST /reviews/store/id</code></li>
                                <li><strong>Parameters:</strong>
                                    <ul>
                                        <li><code>$request</code> - Request containing review data (rating, review_text)</li>
                                        <li><code>$id</code> - Booking ID related to the review</li>
                                    </ul>
                                </li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the booking by ID</li>
                                        <li>If booking not found, shows a 404 page view</li>
                                        <li>Creates a new review with:
                                            <ul>
                                                <li><code>reviewer_id</code>: the booking's space host ID</li>
                                                <li><code>reviewee_id</code>: the renter's user ID</li>
                                                <li><code>booking_id</code>, <code>space_id</code>, rating, and optional review text</li>
                                            </ul>
                                        </li>
                                        <li>Creates a notification for the host about the new review</li>
                                        <li>Redirects back with a success alert message</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirect back with success message</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Role Controller */}

            <h2 id='role-controller' class="my-4">RoleController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\RoleController</code></p>
                </div>
            </div>

            <div class="accordion" id="roleControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#roleControllerMethods">
                        <div class="accordion-body">
                            <p>Displays all roles.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>GET /roles</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Retrieves all roles from the database</li>
                                        <li>Returns view <code>dashboard.roles.index</code> with all roles</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View with all roles</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingStore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStore">
                            store(Request $request)
                        </button>
                    </h2>
                    <div id="collapseStore" class="accordion-collapse collapse" data-bs-parent="#roleControllerMethods">
                        <div class="accordion-body">
                            <p>Creates and saves a new role.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>POST /roles</code></li>
                                <li><strong>Parameters:</strong> <code>$request</code> containing <code>name</code> field</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Validates that the name is a required string (max 255 chars)</li>
                                        <li>Creates a new Role instance and sets the name</li>
                                        <li>Saves the new role to the database</li>
                                        <li>Returns the index view with updated roles list</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View with updated list of roles</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEdit">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEdit">
                            edit($id)
                        </button>
                    </h2>
                    <div id="collapseEdit" class="accordion-collapse collapse" data-bs-parent="#roleControllerMethods">
                        <div class="accordion-body">
                            <p>Displays the edit form for a specific role.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>GET /roles/id/edit</code></li>
                                <li><strong>Parameters:</strong> <code>$id</code> - Role ID</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the role by ID or fails with 404</li>
                                        <li>Returns the edit view with the role data</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View with role data for editing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdate">
                            update(Request $request, string $id)
                        </button>
                    </h2>
                    <div id="collapseUpdate" class="accordion-collapse collapse" data-bs-parent="#roleControllerMethods">
                        <div class="accordion-body">
                            <p>Updates a specific role's name.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>PUT /roles/id</code></li>
                                <li><strong>Parameters:</strong>
                                    <ul>
                                        <li><code>$request</code> with <code>name</code> field</li>
                                        <li><code>$id</code> - Role ID</li>
                                    </ul>
                                </li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Validates that name is required string (max 255 chars)</li>
                                        <li>Finds the role by ID or fails</li>
                                        <li>Updates the role name and saves it</li>
                                        <li>Returns the index view with all roles</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View with updated list of roles</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#roleControllerMethods">
                        <div class="accordion-body">
                            <p>Deletes a role by its ID.</p>
                            <ul>
                                <li><strong>Route Example:</strong> <code>DELETE /roles/id</code></li>
                                <li><strong>Parameters:</strong> <code>$id</code> - Role ID</li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the role by ID (if exists)</li>
                                        <li>Deletes the role</li>
                                        <li>Returns the index view with updated roles</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View with updated list of roles</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Transaction Controller */}

            <h2 id='transaction-controller' className="my-4">TransactionController</h2>

            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h5 className="card-title text-primary">Namespace</h5>
                    <p className="card-text"><code>App\Http\Controllers\TransactionController</code></p>
                </div>
            </div>

            <div className="accordion" id="transactionControllerMethods">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingIndex">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex" aria-expanded="true" aria-controls="collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" className="accordion-collapse collapse show" data-bs-parent="#transactionControllerMethods">
                        <div class="accordion-body">
                            <p>Displays a paginated list of transactions.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /transactions</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Fetches transactions paginated by 10 entries per page</li>
                                        <li>Uses the <code>Transaction</code> model to retrieve data</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>dashboard.transactions.index</code> view with <code>transactions</code> variable</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingShow">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShow" aria-expanded="false" aria-controls="collapseShow">
                            show(string $id)
                        </button>
                    </h2>
                    <div id="collapseShow" className="accordion-collapse collapse" data-bs-parent="#transactionControllerMethods">
                        <div className="accordion-body">
                            <p>Displays details of a single transaction identified by <code>$id</code>.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /transactions/id</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the transaction or fails with 404</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>dashboard.transactions.show</code> view with <code>transaction</code> variable</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEdit">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEdit" aria-expanded="false" aria-controls="collapseEdit">
                            edit(string $id)
                        </button>
                    </h2>
                    <div id="collapseEdit" className="accordion-collapse collapse" data-bs-parent="#transactionControllerMethods">
                        <div className="accordion-body">
                            <p>Shows the form for editing an existing transaction.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /transactions/id/edit</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the transaction or fails with 404</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>dashboard.transactions.edit</code> view with <code>transaction</code> variable</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingUpdate">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdate" aria-expanded="false" aria-controls="collapseUpdate">
                            update(Request $request, string $id)
                        </button>
                    </h2>
                    <div id="collapseUpdate" className="accordion-collapse collapse" data-bs-parent="#transactionControllerMethods">
                        <div className="accordion-body">
                            <p>Updates a transaction with new data.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>PUT /transactions/id</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the transaction or fails with 404</li>
                                        <li>Updates transaction data from request</li>
                                        <li>Updates <code>updated_at</code> timestamp</li>
                                        <li>Saves the transaction</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back to the previous page</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingDestroy">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy" aria-expanded="false" aria-controls="collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" className="accordion-collapse collapse" data-bs-parent="#transactionControllerMethods">
                        <div className="accordion-body">
                            <p>Deletes a transaction.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>DELETE /transactions/id</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds the transaction or fails with 404</li>
                                        <li>Deletes the transaction</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back to the previous page</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFilter">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">
                            filter(Request $request)
                        </button>
                    </h2>
                    <div id="collapseFilter" className="accordion-collapse collapse" data-bs-parent="#transactionControllerMethods">
                        <div className="accordion-body" >
                            <p>Filters transactions based on request parameters.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /transactions/filter</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Filters by <code>status</code> if present</li>
                                        <li>Searches across multiple fields: <code>id</code>, <code>booking_id</code>, <code>transaction_type</code>, <code>amount</code>, <code>status</code>, and <code>payment_method</code></li>
                                        <li>Sorts by creation date ascending/descending or amount descending based on <code>sort</code> param</li>
                                        <li>Paginates results by 10 per page</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>dashboard.transactions.index</code> view with filtered <code>transactions</code></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Verification Controller */}

            <h2 id='verification-controller' class="my-4">VerificationController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\VerificationController</code></p>
                </div>
            </div>

            <div class="accordion" id="verificationControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingRequests">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRequests">
                            requests()
                        </button>
                    </h2>
                    <div id="collapseRequests" class="accordion-collapse collapse show" data-bs-parent="#verificationControllerMethods">
                        <div class="accordion-body">
                            <p>Shows list of hosts with pending KYC verification requests.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /kyc/requests</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Fetches users with role 'host' but without 'admin' or 'superadmin' roles</li>
                                        <li>Filters users who have uploaded ID documents and have 'pending' KYC status</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>dashboard.kyc.requests</code> view with <code>hosts</code> variable</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingApprove">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseApprove">
                            approve(User $user)
                        </button>
                    </h2>
                    <div id="collapseApprove" class="accordion-collapse collapse" data-bs-parent="#verificationControllerMethods">
                        <div class="accordion-body">
                            <p>Approves a user’s KYC status and sends notification.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /kyc/approve/user</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Sets user KYC status to 'approved'</li>
                                        <li>Saves the user model</li>
                                        <li>Creates a notification informing user about KYC approval</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back with success message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingReject">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReject">
                            reject(User $user)
                        </button>
                    </h2>
                    <div id="collapseReject" class="accordion-collapse collapse" data-bs-parent="#verificationControllerMethods">
                        <div class="accordion-body">
                            <p>Rejects a user’s KYC status and sends notification.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /kyc/reject/user</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Sets user KYC status to 'rejected'</li>
                                        <li>Saves the user model</li>
                                        <li>Creates a notification informing user about KYC rejection</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back with success message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingVerification">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVerification">
                            verification()
                        </button>
                    </h2>
                    <div id="collapseVerification" class="accordion-collapse collapse" data-bs-parent="#verificationControllerMethods">
                        <div class="accordion-body">
                            <p>Shows the verification submission page for authenticated users.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /kyc/verification</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>If user KYC is approved, redirects back with message</li>
                                        <li>Otherwise, shows the verification submission form view</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> <code>pages.users.verification</code> view or redirect</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSubmit">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSubmit">
                            submit(Request $request)
                        </button>
                    </h2>
                    <div id="collapseSubmit" class="accordion-collapse collapse" data-bs-parent="#verificationControllerMethods">
                        <div class="accordion-body">
                            <p>Handles KYC document submission by the user.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /kyc/submit</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Validates uploaded document (jpg, jpeg, png, pdf max 2MB)</li>
                                        <li>Stores the document in public storage</li>
                                        <li>Sets user's KYC status to 'pending'</li>
                                        <li>Notifies all admins and superadmins about the new KYC request</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects to home route with a message</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Wishlist Controller */}

            <h2 id='wishlist-controller' class="my-4">WishlistController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\WishlistController</code></p>
                </div>
            </div>

            <div class="accordion" id="wishlistControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#wishlistControllerMethods">
                        <div class="accordion-body">
                            <p>Displays the authenticated user’s wishlist.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /wishlist</code></li>
                                <li><strong>Logic:</strong> Fetches all wishlist entries where <code>user_id</code> matches the logged-in user.</li>
                                <li><strong>Returns:</strong> View <code>pages.users.wishlist</code> with <code>wishlist</code> data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingAdd">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdd">
                            add($id)
                        </button>
                    </h2>
                    <div id="collapseAdd" class="accordion-collapse collapse" data-bs-parent="#wishlistControllerMethods">
                        <div class="accordion-body">
                            <p>Adds a space to the authenticated user’s wishlist.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /wishlist/add/id</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Checks if space already exists in user's wishlist.</li>
                                        <li>If exists, redirects back with error message.</li>
                                        <li>If not, creates a new wishlist entry linking user and space, then saves.</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back with success or error message.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingRemove">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRemove">
                            remove($id)
                        </button>
                    </h2>
                    <div id="collapseRemove" class="accordion-collapse collapse" data-bs-parent="#wishlistControllerMethods">
                        <div class="accordion-body">
                            <p>Removes a space from the authenticated user’s wishlist.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /wishlist/remove/id</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Finds wishlist entry matching user and space.</li>
                                        <li>Deletes the wishlist entry.</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects back with success message.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Space Controller */}

            <h2 id='space-controller' class="my-4">SpaceController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\SpaceController</code></p>
                </div>
            </div>

            <div class="accordion" id="spaceControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Displays paginated list of spaces in the dashboard.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>GET /dashboard/spaces</code></li>
                                <li><strong>Logic:</strong> Fetches spaces paginated by 10.</li>
                                <li><strong>Returns:</strong> View <code>dashboard.spaces.index</code> with <code>spaces</code> data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingShow">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShow">
                            show(string $id)
                        </button>
                    </h2>
                    <div id="collapseShow" class="accordion-collapse collapse" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Displays details of a single space by its ID.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>GET /dashboard/spaces/id</code></li>
                                <li><strong>Logic:</strong> Finds space by ID or fails.</li>
                                <li><strong>Returns:</strong> View <code>dashboard.spaces.show</code> with <code>space</code> data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEdit">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEdit">
                            edit(string $id)
                        </button>
                    </h2>
                    <div id="collapseEdit" class="accordion-collapse collapse" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Displays edit form for a space by ID.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>GET /dashboard/spaces/id/edit</code></li>
                                <li><strong>Logic:</strong> Finds space by ID or fails.</li>
                                <li><strong>Returns:</strong> View <code>dashboard.spaces.edit</code> with <code>space</code> data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdate">
                            update(Request $request, string $id)
                        </button>
                    </h2>
                    <div id="collapseUpdate" class="accordion-collapse collapse" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Updates an existing space with request data.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>PUT/PATCH /dashboard/spaces/id</code></li>
                                <li><strong>Logic:</strong> Finds space by ID or fails, updates with all request inputs.</li>
                                <li><strong>Returns:</strong> Redirects back (typically to the edit page).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Soft deletes a space by setting <code>is_deleted</code> to true.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>DELETE /dashboard/spaces/id</code></li>
                                <li><strong>Logic:</strong> Finds space by ID or fails, marks as deleted, saves.</li>
                                <li><strong>Returns:</strong> Redirects back.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingExplore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExplore">
                            explore(Request $request)
                        </button>
                    </h2>
                    <div id="collapseExplore" class="accordion-collapse collapse" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Searches and filters spaces for public exploration.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>GET /explore</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Filters by sorting, search, capacity, date, time range, amenities, location, price range.</li>
                                        <li>Joins related models (images, host).</li>
                                        <li>Paginates results with 10 per page.</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View <code>pages.explore</code> with <code>rooms</code>, <code>amenities</code>, and <code>cities</code> data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingRoomDetails">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRoomDetails">
                            roomDetails(string $slug)
                        </button>
                    </h2>
                    <div id="collapseRoomDetails" class="accordion-collapse collapse" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Shows detailed page for a space by slug including availability, reviews, and host’s other spaces.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>GET /spaces/slug</code></li>
                                <li><strong>Logic:</strong> Loads space with images, today's availability, host’s other spaces, average rating, reviews count.</li>
                                <li><strong>Returns:</strong> View <code>pages.spaces.details</code> with all gathered data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingCreate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCreate">
                            create()
                        </button>
                    </h2>
                    <div id="collapseCreate" class="accordion-collapse collapse" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Displays form to create a new space with initial setup data.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>GET /spaces/create</code></li>
                                <li><strong>Logic:</strong> Loads amenities and sets step/completion metadata.</li>
                                <li><strong>Returns:</strong> View <code>pages.spaces.create</code> with <code>amenities</code>, <code>currentStep</code>, and <code>completionPercentage</code>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingStore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStore">
                            store(Request $request)
                        </button>
                    </h2>
                    <div id="collapseStore" class="accordion-collapse collapse" data-bs-parent="#spaceControllerMethods">
                        <div class="accordion-body">
                            <p>Creates and stores a new space including images, amenities, and availability.</p>
                            <ul>
                                <li><strong>Route:</strong> Typically <code>POST /spaces</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Creates space record with authenticated user as host.</li>
                                        <li>Uploads and saves images if provided.</li>
                                        <li>Attaches amenities and creates availability records.</li>
                                        <li>Logs creation activity.</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> Redirects to the next step or space details page after successful creation.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEditSpace">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEditSpace" aria-expanded="false" aria-controls="collapseEditSpace">
                            Edit Space
                        </button>
                    </h2>
                    <div id="collapseEditSpace" class="accordion-collapse collapse" aria-labelledby="headingEditSpace" data-bs-parent="#spaceActionsAccordion">
                        <div class="accordion-body">
                            <strong>Purpose:</strong> Retrieve a space by slug and load the edit page with all available amenities.<br />
                            <strong>Steps:</strong>
                            <ul>
                                <li>Find the space by slug.</li>
                                <li>If not found, show 404 page.</li>
                                <li>Fetch all amenities.</li>
                                <li>Return edit view with space and amenities data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdateSpace">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdateSpace" aria-expanded="false" aria-controls="collapseUpdateSpace">
                            Update Space
                        </button>
                    </h2>
                    <div id="collapseUpdateSpace" class="accordion-collapse collapse" aria-labelledby="headingUpdateSpace" data-bs-parent="#spaceActionsAccordion">
                        <div class="accordion-body">
                            <strong>Purpose:</strong> Update space details and related entities like images, amenities, and availabilities.<br />
                            <strong>Steps:</strong>
                            <ul>
                                <li>Find the space by slug; if not found, show 404.</li>
                                <li>Update space fields including title, address, capacity, rates, etc.</li>
                                <li>Handle new image uploads and save their paths.</li>
                                <li>Delete images marked for removal.</li>
                                <li>Detach old amenities and attach new ones.</li>
                                <li>Delete old availability and insert updated availability data.</li>
                                <li>Save changes and return detailed space view with reviews and availability.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFilterSpaces">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilterSpaces" aria-expanded="false" aria-controls="collapseFilterSpaces">
                            Filter Spaces
                        </button>
                    </h2>
                    <div id="collapseFilterSpaces" class="accordion-collapse collapse" aria-labelledby="headingFilterSpaces" data-bs-parent="#spaceActionsAccordion">
                        <div class="accordion-body">
                            <strong>Purpose:</strong> Filter spaces based on a search query across multiple columns.<br />
                            <strong>Steps:</strong>
                            <ul>
                                <li>Build a query on the Space model.</li>
                                <li>If search term exists, add multiple OR where conditions on title, city, description, etc.</li>
                                <li>Paginate the filtered results.</li>
                                <li>Return spaces index view with filtered spaces.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Controller */}

            <h2 id='user-controller' class="my-4">UserController</h2>

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title text-primary">Namespace</h5>
                    <p class="card-text"><code>App\Http\Controllers\UserController</code></p>
                </div>
            </div>

            <div class="accordion" id="userControllerMethods">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingIndex">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndex">
                            index()
                        </button>
                    </h2>
                    <div id="collapseIndex" class="accordion-collapse collapse show" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Displays paginated list of users.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /users</code></li>
                                <li><strong>Logic:</strong> Retrieves users paginated by 10 per page.</li>
                                <li><strong>Returns:</strong> View <code>dashboard.users.index</code> with <code>users</code> data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingStore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStore">
                            store(Request $request)
                        </button>
                    </h2>
                    <div id="collapseStore" class="accordion-collapse collapse" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Validates and creates a new user.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /users</code></li>
                                <li><strong>Logic:</strong> Validates input, hashes password, sets default profile picture if missing, saves user.</li>
                                <li><strong>Returns:</strong> Redirect or view <code>dashboard.users.index</code>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingShow">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShow">
                            show(string $id)
                        </button>
                    </h2>
                    <div id="collapseShow" class="accordion-collapse collapse" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Displays a specific user’s detail.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /users/id</code></li>
                                <li><strong>Logic:</strong> Finds user by id or fails.</li>
                                <li><strong>Returns:</strong> View <code>dashboard.users.show</code> with user data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEdit">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEdit">
                            edit($id)
                        </button>
                    </h2>
                    <div id="collapseEdit" class="accordion-collapse collapse" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Shows the user edit form.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /users/id/edit</code></li>
                                <li><strong>Logic:</strong> Finds user by id or fails.</li>
                                <li><strong>Returns:</strong> View <code>dashboard.users.edit</code> with user data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdate">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdate">
                            update(Request $request, string $id)
                        </button>
                    </h2>
                    <div id="collapseUpdate" class="accordion-collapse collapse" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Updates user details.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>PUT /users/id</code></li>
                                <li><strong>Logic:</strong> Validates request, updates user fields including optional password hashing.</li>
                                <li><strong>Returns:</strong> View <code>dashboard.users.index</code> with updated users list.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingDestroy">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDestroy">
                            destroy(string $id)
                        </button>
                    </h2>
                    <div id="collapseDestroy" class="accordion-collapse collapse" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Soft deletes a user by setting <code>is_deleted</code> flag.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>DELETE /users/id</code></li>
                                <li><strong>Logic:</strong> Finds user and sets <code>is_deleted</code> to true, then saves.</li>
                                <li><strong>Returns:</strong> Redirects back.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingAdminSettings">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdminSettings">
                            adminSettings()
                        </button>
                    </h2>
                    <div id="collapseAdminSettings" class="accordion-collapse collapse" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Displays admin settings for authenticated user.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /admin/settings</code></li>
                                <li><strong>Logic:</strong> Passes authenticated user data.</li>
                                <li><strong>Returns:</strong> View <code>dashboard.settings.index</code>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdateAdminSettings">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdateAdminSettings">
                            updateAdminSettings(Request $request, string $id)
                        </button>
                    </h2>
                    <div id="collapseUpdateAdminSettings" class="accordion-collapse collapse" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Updates admin profile including optional profile picture upload.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>POST /admin/settings/id</code></li>
                                <li><strong>Logic:</strong> Validates input, handles image upload if present, updates user data.</li>
                                <li><strong>Returns:</strong> Redirects back with success message.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingProfile">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProfile">
                            profile(string $slug)
                        </button>
                    </h2>
                    <div id="collapseProfile" class="accordion-collapse collapse" data-bs-parent="#userControllerMethods">
                        <div class="accordion-body">
                            <p>Displays public user profile based on slug with role-specific data.</p>
                            <ul>
                                <li><strong>Route:</strong> <code>GET /profile/slug</code></li>
                                <li><strong>Logic:</strong>
                                    <ul>
                                        <li>Returns 404 if user not found or deleted or role is admin/superadmin.</li>
                                        <li>If host, calculates average rating and total reviews for hosted spaces.</li>
                                        <li>Otherwise, loads bookings and reviews for renter.</li>
                                    </ul>
                                </li>
                                <li><strong>Returns:</strong> View <code>pages.users.profile</code> with profile data.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingProfileEdit">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProfileEdit" aria-expanded="false" aria-controls="collapseProfileEdit">
                            profileEdit(string $slug)
                        </button>
                    </h2>
                    <div id="collapseProfileEdit" class="accordion-collapse collapse" aria-labelledby="headingProfileEdit" data-bs-parent="#controllerActionsAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Route:</strong> <code>GET /profile/slug/edit</code></li>
                                <li><strong>Returns:</strong> <code>pages.users.edit</code> view or <code>pages.404</code> if user not found or unauthorized</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdateProfile">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdateProfile" aria-expanded="false" aria-controls="collapseUpdateProfile">
                            updateProfile(Request $request, string $id)
                        </button>
                    </h2>
                    <div id="collapseUpdateProfile" class="accordion-collapse collapse" aria-labelledby="headingUpdateProfile" data-bs-parent="#controllerActionsAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Route:</strong> <code>POST /profile/id/update</code></li>
                                <li><strong>Validations:</strong> first_name, last_name, email (unique), password (confirmed, min 8), bio, phone_number, company_name, profile picture (image, max 2MB)</li>
                                <li><strong>Returns:</strong> Redirects back with success message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingUpdatePassword">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUpdatePassword" aria-expanded="false" aria-controls="collapseUpdatePassword">
                            updatePassword(Request $request, string $id)
                        </button>
                    </h2>
                    <div id="collapseUpdatePassword" class="accordion-collapse collapse" aria-labelledby="headingUpdatePassword" data-bs-parent="#controllerActionsAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Route:</strong> <code>POST /profile/id/password/update</code></li>
                                <li><strong>Validations:</strong> password (required, confirmed, min 8)</li>
                                <li><strong>Returns:</strong> Redirects to <code>/login</code> with success message (user logged out)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSearch">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
                            search(Request $request)
                        </button>
                    </h2>
                    <div id="collapseSearch" class="accordion-collapse collapse" aria-labelledby="headingSearch" data-bs-parent="#controllerActionsAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Route:</strong> <code>GET /users/search?query=</code></li>
                                <li><strong>Returns:</strong> <code>dashboard.users.index</code> view</li>
                                <li><strong>Pagination:</strong> 10 per page</li>
                                <li><strong>Search Fields:</strong> first_name, last_name, email, phone_number</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFilter">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">
                            filter(string $option)
                        </button>
                    </h2>
                    <div id="collapseFilter" class="accordion-collapse collapse" aria-labelledby="headingFilter" data-bs-parent="#controllerActionsAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Route:</strong> <code>GET /users/filter/option</code></li>
                                <li><strong>Options:</strong> verified, unverified, recent, deleted</li>
                                <li><strong>Returns:</strong> <code>dashboard.users.index</code> view</li>
                                <li><strong>Pagination:</strong> 10 per page</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingRestore">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRestore" aria-expanded="false" aria-controls="collapseRestore">
                            restore(string $id)
                        </button>
                    </h2>
                    <div id="collapseRestore" class="accordion-collapse collapse" aria-labelledby="headingRestore" data-bs-parent="#controllerActionsAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Route:</strong> <code>POST /users/id/restore</code></li>
                                <li><strong>Returns:</strong> Redirects back with success message</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingHostStats">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHostStats" aria-expanded="false" aria-controls="collapseHostStats">
                            hostStats(string $slug)
                        </button>
                    </h2>
                    <div id="collapseHostStats" class="accordion-collapse collapse" aria-labelledby="headingHostStats" data-bs-parent="#controllerActionsAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Route:</strong> <code>GET /host/slug/stats</code></li>
                                <li><strong>Returns:</strong> <code>pages.users.host.stats</code> view or <code>pages.404</code> if host not found</li>
                                <li><strong>Data Provided:</strong> totalBookings, hostRooms, totalHostBookings, hostProfits, cancelledBookings, pendingBookingsOnSpces, mostBookedSpaces (top 3), recentBookings (6 per page)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}