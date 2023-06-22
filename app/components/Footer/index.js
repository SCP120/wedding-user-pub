import React from 'react';
import {FormattedMessage} from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
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
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Footer() {
  return (
    <>
      <link href='../HomePage/img/favicon.ico' rel='icon'/>

      <link rel='preconnect' href='https://fonts.googleapis.com'/>
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin=''/>
      <link
        href='https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap'
        rel='stylesheet'
      />

      <link
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'
        rel='stylesheet'
      />
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
        rel='stylesheet'
      />
      <div
        className='container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-lg-3 col-md-6'>
              <h5 className='text-white mb-4'>Get In Touch</h5>
              <p className='mb-2'>
                <i className='fa fa-map-marker-alt me-3'/>
                123 Street, New York, USA
              </p>
              <p className='mb-2'>
                <i className='fa fa-phone-alt me-3'/>
                +012 345 67890
              </p>
              <p className='mb-2'>
                <i className='fa fa-envelope me-3'/>
                info@example.com
              </p>
              <div className='d-flex pt-2'>
                <a className='btn btn-outline-light btn-social' href=''>
                  <i className='fab fa-twitter'/>
                </a>
                <a className='btn btn-outline-light btn-social' href=''>
                  <i className='fab fa-facebook-f'/>
                </a>
                <a className='btn btn-outline-light btn-social' href=''>
                  <i className='fab fa-youtube'/>
                </a>
                <a className='btn btn-outline-light btn-social' href=''>
                  <i className='fab fa-linkedin-in'/>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <h5 className='text-white mb-4'>Quick Links</h5>
              <a className='btn btn-link text-white-50' href=''>
                About Us
              </a>
              <a className='btn btn-link text-white-50' href=''>
                Contact Us
              </a>
              <a className='btn btn-link text-white-50' href=''>
                Our Services
              </a>
              <a className='btn btn-link text-white-50' href=''>
                Privacy Policy
              </a>
              <a className='btn btn-link text-white-50' href=''>
                Terms &amp; Condition
              </a>
            </div>
            <div className='col-lg-3 col-md-6'>
              <h5 className='text-white mb-4'>Photo Gallery</h5>
              <div className='row g-2 pt-2'>
                <div className='col-4'>
                  <img
                    className='img-fluid rounded bg-light p-1'
                    src={require('../../containers/HomePage/img/property-1.jpg')}
                    alt=''
                  />
                </div>
                <div className='col-4'>
                  <img
                    className='img-fluid rounded bg-light p-1'
                    src={require('../../containers/HomePage/img/property-2.jpg')}
                    alt=''
                  />
                </div>
                <div className='col-4'>
                  <img
                    className='img-fluid rounded bg-light p-1'
                    src={require('../../containers/HomePage/img/property-3.jpg')}
                    alt=''
                  />
                </div>
                <div className='col-4'>
                  <img
                    className='img-fluid rounded bg-light p-1'
                    src={require('../../containers/HomePage/img/property-4.jpg')}
                    alt=''
                  />
                </div>
                <div className='col-4'>
                  <img
                    className='img-fluid rounded bg-light p-1'
                    src={require('../../containers/HomePage/img/property-5.jpg')}
                    alt=''
                  />
                </div>
                <div className='col-4'>
                  <img
                    className='img-fluid rounded bg-light p-1'
                    src={require('../../containers/HomePage/img/property-6.jpg')}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <h5 className='text-white mb-4'>Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className='position-relative mx-auto'
                style={{maxWidth: 400}}
              >
                <input
                  className='form-control bg-transparent w-100 py-3 ps-4 pe-5'
                  type='text'
                  placeholder='Your email'
                />
                <button
                  type='button'
                  className='btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2'
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='copyright'>
            <div className='row'>
              <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
                ©{' '}
                <a className='border-bottom' href='#'>
                  Your Site Name
                </a>
                , All Right Reserved.

                Designed By{' '}
                <a className='border-bottom' href='https://htmlcodex.com'>
                  HTML Codex
                </a>
              </div>
              <div className='col-md-6 text-center text-md-end'>
                <div className='footer-menu'>
                  <a href=''>Home</a>
                  <a href=''>Cookies</a>
                  <a href=''>Help</a>
                  <a href=''>FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}


    </>

  );
}

export default Footer;
