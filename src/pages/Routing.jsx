import React from "react";

export default function Routing() {
    return (
        <div class="container py-5">
            <h1 class="display-4 mb-4">Routing</h1>

            <a className="btn btn-outline-dark mb-4" href="https://github.com/moshoubash/Masterpiece-TeamRoom/tree/main/routes"><i className="fa-brands fa-github"></i> Github Routes</a>

            <ul class="nav nav-tabs mb-4" id="routeTabs" role="tablist">
                <li class="nav-item">
                    <button class="nav-link active" id="web-tab" data-bs-toggle="tab" data-bs-target="#webRoutes" type="button" role="tab">web.php</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" id="auth-tab" data-bs-toggle="tab" data-bs-target="#authRoutes" type="button" role="tab">auth.php</button>
                </li>
            </ul>

            <div class="tab-content" id="routeTabsContent">
                <div class="tab-pane fade show active" id="webRoutes" role="tabpanel">
                    <div class="accordion" id="webRoutesAccordion">

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="homeHeading">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#homeRoute">
                                    Home Page Route
                                </button>
                            </h2>
                            <div id="homeRoute" class="accordion-collapse collapse show" data-bs-parent="#webRoutesAccordion">
                                <div class="accordion-body">
                                    <code>GET / → HomeController@index</code><br />
                                    <strong>Middleware:</strong> None<br />
                                    <strong>Name:</strong> home
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="dashboardHeading">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardRoutes">
                                    Dashboard (Protected by auth, admin)
                                </button>
                            </h2>
                            <div id="dashboardRoutes" class="accordion-collapse collapse" data-bs-parent="#webRoutesAccordion">
                                <div class="accordion-body">
                                    <ul>
                                        <li><code>GET /dashboard → DashboardController@index</code></li>
                                        <li><code>GET /dashboard/users → UserController@index</code></li>
                                        <li><code>GET /dashboard/roles → RoleController@index</code></li>
                                        <li><code>GET /dashboard/spaces → SpaceController@index</code></li>
                                        <li><code>GET /dashboard/reviews → ReviewController@index</code></li>
                                        <li><code>GET /dashboard/notifications → NotificationController@index</code></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="publicHeading">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#publicRoutes">
                                    Public Website Routes
                                </button>
                            </h2>
                            <div id="publicRoutes" class="accordion-collapse collapse" data-bs-parent="#webRoutesAccordion">
                                <div class="accordion-body">
                                    <ul>
                                        <li><code>GET /explore → SpaceController@explore</code></li>
                                        <li><code>GET /rooms/details/room-slug → SpaceController@roomDetails</code></li>
                                        <li><code>GET /contact → Static Page</code></li>
                                        <li><code>POST /contact/send → ContactController@send</code></li>
                                        <li><code>GET /about</code>, <code>/terms</code>, <code>/privacy</code></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="bookingHeading">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bookingRoutes">
                                    Booking Routes
                                </button>
                            </h2>
                            <div id="bookingRoutes" class="accordion-collapse collapse" data-bs-parent="#webRoutesAccordion">
                                <div class="accordion-body">
                                    <ul>
                                        <li><code>POST /booking/store</code> → <strong>BookingController@store</strong></li>
                                        <li><code>POST /booking/checkout</code> → <strong>PaymentController@checkout</strong></li>
                                        <li><code>GET /bookings/confirmation/booking-id</code> → <strong>PaymentController@confirmation</strong></li>
                                        <li><code>PUT /booking/confirm/booking-id</code> → <strong>BookingController@approve</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="miscHeading">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#miscRoutes">
                                    Other Notable Routes
                                </button>
                            </h2>
                            <div id="miscRoutes" class="accordion-collapse collapse" data-bs-parent="#webRoutesAccordion">
                                <div class="accordion-body">
                                    <ul>
                                        <li><code>/wishlist</code> → WishlistController</li>
                                        <li><code>/dashboard/kyc</code> → VerificationController</li>
                                        <li><code>/export/table-name/type(pdf, csv, xlsx)</code> → ReportController</li>
                                        <li><code>fallback route → pages.404</code></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="tab-pane fade" id="authRoutes" role="tabpanel">
                    <p><strong>Note:</strong> These routes are defined in <code>routes/auth.php</code> and include login, logout, registration, password reset, etc.</p>
                    <ul>
                        <li><code>GET /login</code> → AuthenticatedSessionController@create</li>
                        <li><code>POST /login</code> → AuthenticatedSessionController@store</li>
                        <li><code>POST /logout</code> → AuthenticatedSessionController@destroy</li>
                        <li><code>GET /register</code> → RegisteredUserController@create</li>
                        <li><code>POST /register</code> → RegisteredUserController@store</li>
                        <li><code>GET /forgot-password</code>, <code>/reset-password</code>, etc.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
