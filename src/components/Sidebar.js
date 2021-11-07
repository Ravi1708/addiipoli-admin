import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Link,NavLink } from 'react-router-dom'
import { login, logout } from "../actions/userActions";

const Sidebar = ({ location, history }) => {

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = (e) => {
        dispatch(logout);
    };


    return (
        <div>
            <div className="skin-default fixed-layout">
                {/* <!-- ============================================================== -->
                <!-- Preloader - style you can find in spinners.css -->
                <!-- ============================================================== --> */}
                {/* <div className="preloader">
                    <div className="loader">
                        <div className="loader__figure"></div>
                        <p className="loader__label">Addipoli admin</p>
                    </div>
                </div> */}
                {/* <!-- ============================================================== --> 
                <!-- Main wrapper - style you can find in pages.scss -->
                <!-- ============================================================== --> */}
                <div id="main-wrapper">
                    {/* <!-- ============================================================== -->
                    <!-- Topbar header - style you can find in pages.scss -->
                    <!-- ============================================================== --> */}
                    <header className="topbar">
                        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                            {/* <!-- ============================================================== -->
                            <!-- Logo -->
                            <!-- ============================================================== --> */}
                            <div className="navbar-header">
                                <NavLink to="/dashboard" className="navbar-brand" >

                                    <b>
                                        {/* <!--You can put here icon as well // <i className="wi wi-sunset"></i> //-->
                                        <!-- Dark Logo icon --> */}
                                        <img src="assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
            
                                        <img src="assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                                    </b>
                                    {/* <!--End Logo icon -->
                                    <!-- Logo text --> */}
                                    <span>
                                        {/* <!-- dark Logo text --> */}
                                        <img src="assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                                        {/* <!-- Light Logo text --> */}
                                        <img src="assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                                    </span>
                                </NavLink>
                            </div>
                            {/* <!-- ============================================================== -->
                            <!-- End Logo -->
                            <!-- ============================================================== --> */}
                            <div className="navbar-collapse">
                                {/* <!-- ============================================================== -->
                                <!-- toggle and nav items -->
                                <!-- ============================================================== --> */}
                                <ul className="navbar-nav me-auto">
                                    {/* <!-- This is  --> */}
                                    <li className="nav-item">
                                        <a className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                                            href="javascript:void(0)">
                                            <i className="ti-menu"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
                                            href="javascript:void(0)">
                                            <i className="icon-menu"></i>
                                        </a>
                                    </li>
                                    {/* <!-- ============================================================== -->
                                    <!-- Search -->
                                    <!-- ============================================================== --> */}
                                    <li className="nav-item">
                                        <form className="app-search d-none d-md-block d-lg-block">
                                            <input type="text" className="form-control" placeholder="Search & enter" />
                                        </form>
                                    </li>
                                </ul>
                                {/* <!-- ============================================================== -->
                                <!-- User profile and search -->
                                <!-- ============================================================== --> */}
                                <ul className="navbar-nav my-lg-0">
                                    {/* <!-- ============================================================== -->
                                    <!-- Comment -->
                                    <!-- ============================================================== --> */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <i className="ti-email"></i>
                                            <div className="notify">
                                                <span className="heartbit"></span>
                                                <span className="point"></span>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end mailbox animated bounceInDown">
                                            <ul>
                                                <li>
                                                    <div className="drop-title">Notifications</div>
                                                </li>
                                                <li>
                                                    <div className="message-center">
                                                        {/* <!-- Message --> */}
                                                        <a href="javascript:void(0)">
                                                            <div className="btn btn-danger btn-circle text-white">
                                                                <i className="fa fa-link"></i>
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h5>Luanch Admin</h5>
                                                                <span className="mail-desc">Just see the my new admin!</span>
                                                                <span className="time">9:30 AM</span>
                                                            </div>
                                                        </a>
                                                        {/* <!-- Message --> */}
                                                        <a href="javascript:void(0)">
                                                            <div className="btn btn-success btn-circle text-white">
                                                                <i className="ti-calendar"></i>
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h5>Event today</h5>
                                                                <span className="mail-desc">Just a reminder that you have event</span>
                                                                <span className="time">9:10 AM</span>
                                                            </div>
                                                        </a>
                                                        {/* <!-- Message --> */}
                                                        <a href="javascript:void(0)">
                                                            <div className="btn btn-info btn-circle text-white">
                                                                <i className="ti-settings"></i>
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h5>Settings</h5>
                                                                <span className="mail-desc">You can customize this template as you
                                                                    want</span>
                                                                <span className="time">9:08 AM</span>
                                                            </div>
                                                        </a>
                                                        {/* <!-- Message --> */}
                                                        <a href="javascript:void(0)">
                                                            <div className="btn btn-primary btn-circle">
                                                                <i className="ti-user"></i>
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h5>Pavan kumar</h5>
                                                                <span className="mail-desc">Just see the my admin!</span>
                                                                <span className="time">9:02 AM</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="nav-link text-center link" href="javascript:void(0);">
                                                        <strong>Check all notifications</strong>
                                                        <i className="fa fa-angle-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* <!-- ============================================================== -->
                                    <!-- End Comment -->
                                    <!-- ============================================================== -->
                                    <!-- ============================================================== -->
                                    <!-- Messages -->
                                    <!-- ============================================================== --> */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id="2"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-note"></i>
                                            <div className="notify">
                                                <span className="heartbit"></span>
                                                <span className="point"></span>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu mailbox dropdown-menu-end animated bounceInDown"
                                            aria-labelledby="2">
                                            <ul>
                                                <li>
                                                    <div className="drop-title">You have 4 new messages</div>
                                                </li>
                                                <li>
                                                    <div className="message-center">
                                                        {/* <!-- Message --> */}
                                                        <a href="javascript:void(0)">
                                                            <div className="user-img">
                                                                <img src="assets/images/users/1.jpg" alt="user"
                                                                    className="img-circle" />
                                                                <span className="profile-status online pull-right"></span>
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h5>Pavan kumar</h5>
                                                                <span className="mail-desc">Just see the my admin!</span>
                                                                <span className="time">9:30 AM</span>
                                                            </div>
                                                        </a>
                                                        {/* <!-- Message --> */}
                                                        <a href="javascript:void(0)">
                                                            <div className="user-img">
                                                                <img src="assets/images/users/2.jpg" alt="user"
                                                                    className="img-circle" />
                                                                <span className="profile-status busy pull-right"></span>
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h5>Sonu Nigam</h5>
                                                                <span className="mail-desc">I've sung a song! See you at</span>
                                                                <span className="time">9:10 AM</span>
                                                            </div>
                                                        </a>
                                                        {/* <!-- Message --> */}
                                                        <a href="javascript:void(0)">
                                                            <div className="user-img">
                                                                <img src="assets/images/users/3.jpg" alt="user"
                                                                    className="img-circle" />
                                                                <span className="profile-status away pull-right"></span>
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h5>Arijit Sinh</h5>
                                                                <span className="mail-desc">I am a singer!</span>
                                                                <span className="time">9:08 AM</span>
                                                            </div>
                                                        </a>
                                                        {/* <!-- Message --> */}
                                                        <a href="javascript:void(0)">
                                                            <div className="user-img">
                                                                <img src="assets/images/users/4.jpg" alt="user"
                                                                    className="img-circle" />
                                                                <span className="profile-status offline pull-right"></span>
                                                            </div>
                                                            <div className="mail-contnet">
                                                                <h5>Pavan kumar</h5>
                                                                <span className="mail-desc">Just see the my admin!</span>
                                                                <span className="time">9:02 AM</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="nav-link text-center link" href="javascript:void(0);">
                                                        <strong>See all e-Mails</strong>
                                                        <i className="fa fa-angle-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* <!-- ============================================================== -->
                                    <!-- End Messages -->
                                    <!-- ============================================================== --> */}
                                </ul>
                            </div>
                        </nav>
                    </header>
                    {/* <!-- ============================================================== -->
                    <!-- End Topbar header -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Left Sidebar - style you can find in sidebar.scss  -->
                    <!-- ============================================================== --> */}
                    <aside className="left-sidebar">
                        {/* <!-- Sidebar scroll--> */}
                        <div className="scroll-sidebar">
                            {/* <!-- User Profile--> */}
                            <div className="user-profile">
                                <div className="user-pro-body">
                                    <div>
                                        <img src="assets/images/users/2.jpg" alt="user-img" className="img-circle" />
                                    </div>
                                    {userInfo ? (
                                        <div className="dropdown">
                                            <a href="javascript:void(0)" className="dropdown-toggle u-dropdown link hide-menu"
                                                data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {userInfo.name}
                                                <span className="caret"></span>
                                            </a>
                                            <div className="dropdown-menu animated flipInY">
                                                <a href="/profile" className="dropdown-item"><i className="ti-user"></i> My Profile</a>
                                                <a href="/balance" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                                                <a href="/setting" className="dropdown-item"> <i className="ti-settings"></i> Account Setting</a>
                                                <a onClick={logoutHandler}  className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                                            </div>
                                        </div>
                                    ) : (
                                        <a href="/login">
                                            <i
                                            style={{ marginRight: "5px" }}
                                            class="fas fa-user-alt"
                                            ></i>
                                            Sign In
                                        </a>
                                    )}

                                    
                                </div>
                            </div>
                            {/* <!-- Sidebar navigation--> */}
                            <nav className="sidebar-nav">
                                <ul id="sidebarnav">
                                <li>
                                        <a href="/" className="waves-effect waves-dark" >
                                        <i className="icon-speedometer"></i>
                                            <span className="hide-menu">Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/customers"  className="waves-effect waves-dark" >
                                            <i className="ti-user"></i>
                                            <span className="hide-menu">Customer Details</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                                            aria-expanded="false">
                                            <i className="ti-gallery"></i>
                                            <span className="hide-menu">Hub Details</span>
                                        </a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li>
                                                <a href="/hub">Hub Details</a>
                                            </li>
                                            <li>
                                                <a href="/cooked">Cooked Products</a>
                                            </li>
                                            {/* <li>
                                                <a href="/completed">Completed Orders</a>
                                            </li> */}
                                        </ul>
                                    </li>
                                    <li>
                                        <a  className="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                                            aria-expanded="false">
                                            <i className="ti-pie-chart"></i>
                                            <span className="hide-menu">Order Details</span>
                                        </a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li>
                                                <a href="/ongoing">Ongoing Orders</a>
                                            </li>
                                            <li>
                                                <a href="/reject">Rejectd Orders</a>
                                            </li>
                                            <li>
                                                <a href="/completed">Completed Orders</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="waves-effect waves-dark" href="/deliverypartner"
                                            aria-expanded="false">
                                            <i className="ti-location-pin"></i>
                                            <span className="hide-menu">Delivery Partner</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="waves-effect waves-dark" href="/enquiry"
                                            aria-expanded="false">
                                            <i className="ti-email"></i>
                                            <span className="hide-menu">Enquiry</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                                            aria-expanded="false">
                                            <i className="ti-files"></i>
                                            <span className="hide-menu">Product</span>
                                        </a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li>
                                                <a href="/product">Product List</a>
                                            </li>
                                            <li>
                                                <a href="/combo">Combo List</a>
                                            </li>
                                            <li>
                                                <a href="/coupon">Coupon Detail</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="waves-effect waves-dark" href="/slider"
                                            aria-expanded="false">
                                            <i className="ti-layout-media-right-alt"></i>
                                            <span className="hide-menu">Slider</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="waves-effect waves-dark" href="/gallery"
                                            aria-expanded="false">
                                            <i className="ti-palette"></i>
                                            <span className="hide-menu">Gallery</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="waves-effect waves-dark" href="/blog"
                                            aria-expanded="false">
                                            <i className="ti-gallery"></i>
                                            <span className="hide-menu">Blog</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            {/* <!-- End Sidebar navigation --> */}
                        </div>
                        {/* <!-- End Sidebar scroll--> */}
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
