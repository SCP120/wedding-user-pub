import React, { useEffect } from 'react';
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
// import '../../containers/HomePage/scss/bootstrap.scss';

import '../../containers/HomePage/icon/css/all.css';
import '../../containers/HomePage/css/style.css';

import messages from './messages';
import { Helmet } from 'react-helmet';
import WOW from 'wow.js';

(function($) {
  // Spinner
  const spinner = function() {
    setTimeout(function() {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 45) {
      $('.nav-bar').addClass('sticky-top');
    } else {
      $('.nav-bar').removeClass('sticky-top');
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Header carousel
  $('.header-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $('.testimonial-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
})(jQuery);

function Header() {
  useEffect(() => {
    const jquery = document.createElement('script');
    const script = document.createElement('script');
    jquery.src =
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    jquery.async = true;

    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js';
    script.async = true;

    const main = document.createElement('script');
    main.src = '../../containers/HomePage/js/main.js';
    main.async = true;
    main.crossOrigin = true;
    main.type = 'text/babel';

    const common_scripts = document.createElement('script');
    common_scripts.src = '../../containers/HomePage/lib/easing/easing.min.js';
    common_scripts.async = true;
    common_scripts.crossOrigin = true;
    common_scripts.type = 'text/babel';

    const stickySidebar = document.createElement('script');
    stickySidebar.src = '../../containers/HomePage/lib/owlcarousel/owl.carousel.min.js';
    stickySidebar.async = true;
    stickySidebar.crossOrigin = true;
    stickySidebar.type = 'text/babel';

    const specificListing = document.createElement('script');
    specificListing.src = '../../containers/HomePage/lib/waypoints/waypoints.min.js';
    specificListing.async = true;
    specificListing.crossOrigin = true;
    specificListing.type = 'text/babel';

    document.body.appendChild(jquery);
    document.body.appendChild(script);
    document.body.appendChild(main);
    document.body.appendChild(common_scripts);
    document.body.appendChild(stickySidebar);
    document.body.appendChild(specificListing);

    return () => {
      document.body.removeChild(jquery);
      document.body.removeChild(script);
      document.body.removeChild(main);
      document.body.removeChild(common_scripts);
      document.body.removeChild(stickySidebar);
      document.body.removeChild(specificListing);
    };
  }, []);
  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
          crossOrigin
        />
        <script
          src="https://unpkg.com/react@17/umd/react.development.js"
          crossOrigin
        />
        <script
          src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
          crossOrigin
        />
        <script src="https://unpkg.com/@babel/standalone/babel.min.js" />

        <link href="../HomePage/img/favicon.ico" rel="icon" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>


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
              <a href='/' className='nav-item nav-link active'>
                Trang chủ
              </a>
              <a href='/danh-sach' className='nav-item nav-link'>
                Danh Sách
              </a>
              <div className='nav-item dropdown'>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href='#'
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                >
                  Dịch vụ
                </a>
                <div className='dropdown-menu rounded-0 m-0'>
                  <a href='/danh-sach' className='dropdown-item'>
                    Property List
                  </a>
                  <a href='/danh-sach' className='dropdown-item'>
                    Property Type
                  </a>
                  <a href='/danh-sach' className='dropdown-item'>
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
              {/*<a href='contact.html' className='nav-item nav-link'>*/}
              {/*  Contact*/}
              {/*</a>*/}
            </div>
            <a href='/dang-nhap' className='btn btn-primary px-3 d-none d-lg-flex'>
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
