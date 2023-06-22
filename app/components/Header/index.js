import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';

import 'jquery';
import 'waypoints/lib/noframework.waypoints.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../HomePage/lib/wow/wow.min.js';
// import 'owl.carousel';
import 'bootstrap';
//
// import '../HomePage/lib/easing/easing.min.js';
// import '../HomePage/lib/waypoints/waypoints.min.js';
// import '../HomePage/lib/owlcarousel/owl.carousel.min.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import '../../containers/HomePage/lib/animate/animate.min.css';
//
import '../../containers/HomePage/css/bootstrap.min.css';
import '../../containers/HomePage/icon/css/all.css';
import '../../containers/HomePage/css/style.css';
import '../../containers/HomePage/js/main.js';
import '../../containers/HomePage/lib/easing/easing.min.js';
import messages from './messages';
import { Helmet } from 'react-helmet';

function Header() {
  return (
    <>
      <Helmet>
        <link href="../HomePage/img/favicon.ico" rel="icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Helmet>

      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src={require('../../containers/HomePage/img/icon-deal.png')}
                style={{ width: 30, height: 30 }}/>
            </div>
            <h1 className='m-0 text-primary'>BlissfulBells</h1>
          </a>
          <button
            type='button'
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <div className='navbar-nav ms-auto'>
              <a href='index.html' className='nav-item nav-link active'>
                Home
              </a>
              <a href='about.html' className='nav-item nav-link'>
                About
              </a>
              <div className='nav-item dropdown'>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href='#'
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                >
                  Services
                </a>
                <div className='dropdown-menu rounded-0 m-0'>
                  <a href='property-list.html' className='dropdown-item'>
                    Property List
                  </a>
                  <a href='property-type.html' className='dropdown-item'>
                    Property Type
                  </a>
                  <a href='property-agent.html' className='dropdown-item'>
                    Property Agent
                  </a>
                </div>
              </div>
              {/* <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div class="dropdown-menu rounded-0 m-0">
                  <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="404.html" class="dropdown-item">404 Error</a>
              </div>
          </div> */}
              <a href='contact.html' className='nav-item nav-link'>
                Contact
              </a>
            </div>
            <a href='' className='btn btn-primary px-3 d-none d-lg-flex'>
              Login
            </a>
          </div>
        </nav>
      </div>
      <div />
    </>
  );
}

export default Header;
