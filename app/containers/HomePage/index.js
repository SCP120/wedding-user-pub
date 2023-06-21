/* eslint-disable prettier/prettier */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import '../HomePage/img/favicon.ico';
import '../HomePage/lib/animate/animate.min.css';
import '../HomePage/lib/owlcarousel/assets/owl.carousel.min.css';
import '../HomePage/css/bootstrap.min.css';
import '../HomePage/icon/css/all.css';
import '../HomePage/css/style.css';
import image from '../../images/icon-512x512.png';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { render } from 'react-testing-library';

const key = 'home';

export function HomePage({
                           username,
                           loading,
                           error,
                           repos,
                           onSubmitForm,
                         }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {

    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();

  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };
  // render();
  // {
  //   return {};
  // }
  return (

      <>
        <meta charSet='utf-8' />
        {/* Favicon */}
        <link href='../HomePage/img/favicon.ico' rel='icon' />
        {/* Google Web Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        <link
          href='https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap'
          rel='stylesheet'
        />
        {/* Icon Font Stylesheet */}
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'
          rel='stylesheet'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
          rel='stylesheet'
        />

        <div className='container-xxl bg-white p-0'>
          {/* Spinner Start */}
          {/*<div*/}
          {/*  id='spinner'*/}
          {/*  className='show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center'*/}
          {/*>*/}
          {/*  <div*/}
          {/*    className='spinner-border text-primary'*/}
          {/*    style={{ width: '3rem', height: '3rem' }}*/}
          {/*    role='status'*/}
          {/*  >*/}
          {/*    <span className='sr-only'>Loading...</span>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/* Spinner End */}
          {/* Navbar Start */}
          {/*<div className='container-fluid nav-bar bg-transparent'>*/}
          {/*  <nav className='navbar navbar-expand-lg bg-white navbar-light py-0 px-4'>*/}
          {/*    <a*/}
          {/*      href='index.html'*/}
          {/*      className='navbar-brand d-flex align-items-center text-center'*/}
          {/*    >*/}
          {/*      <div className='icon p-2 me-2'>*/}
          {/*        <img*/}
          {/*          className='img-fluid'*/}
          {/*          src='img/icon-deal.png'*/}
          {/*          alt='Icon'*/}
          {/*          style={{ width: 30, height: 30 }}*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <h1 className='m-0 text-primary'>BlissfulBells</h1>*/}
          {/*    </a>*/}
          {/*    <button*/}
          {/*      type='button'*/}
          {/*      className='navbar-toggler'*/}
          {/*      data-bs-toggle='collapse'*/}
          {/*      data-bs-target='#navbarCollapse'*/}
          {/*    >*/}
          {/*      <span className='navbar-toggler-icon' />*/}
          {/*    </button>*/}
          {/*    <div className='collapse navbar-collapse' id='navbarCollapse'>*/}
          {/*      <div className='navbar-nav ms-auto'>*/}
          {/*        <a href='index.html' className='nav-item nav-link active'>*/}
          {/*          Home*/}
          {/*        </a>*/}
          {/*        <a href='about.html' className='nav-item nav-link'>*/}
          {/*          About*/}
          {/*        </a>*/}
          {/*        <div className='nav-item dropdown'>*/}
          {/*          /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
          {/*          <a*/}
          {/*            href='#'*/}
          {/*            className='nav-link dropdown-toggle'*/}
          {/*            data-bs-toggle='dropdown'*/}
          {/*          >*/}
          {/*            Services*/}
          {/*          </a>*/}
          {/*          <div className='dropdown-menu rounded-0 m-0'>*/}
          {/*            <a href='property-list.html' className='dropdown-item'>*/}
          {/*              Property List*/}
          {/*            </a>*/}
          {/*            <a href='property-type.html' className='dropdown-item'>*/}
          {/*              Property Type*/}
          {/*            </a>*/}
          {/*            <a href='property-agent.html' className='dropdown-item'>*/}
          {/*              Property Agent*/}
          {/*            </a>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        /!* <div class="nav-item dropdown">*/}
          {/*            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>*/}
          {/*            <div class="dropdown-menu rounded-0 m-0">*/}
          {/*                <a href="testimonial.html" class="dropdown-item">Testimonial</a>*/}
          {/*                <a href="404.html" class="dropdown-item">404 Error</a>*/}
          {/*            </div>*/}
          {/*        </div> *!/*/}
          {/*        <a href='contact.html' className='nav-item nav-link'>*/}
          {/*          Contact*/}
          {/*        </a>*/}
          {/*      </div>*/}
          {/*      <a href='' className='btn btn-primary px-3 d-none d-lg-flex'>*/}
          {/*        Login*/}
          {/*      </a>*/}
          {/*    </div>*/}
          {/*  </nav>*/}
          {/*</div>*/}
          {/* Navbar End */}
          {/* Header Start */}
          <div className='container-fluid header bg-white p-0'>
            <div className='row g-0 align-items-center flex-column-reverse flex-md-row'>
              <div className='col-md-6 p-5 mt-lg-5'>
                <h1 className='display-5 animated fadeIn mb-4'>
                  Discover Your{' '}
                  <span className='text-primary-main'>Perfect Wedding</span> Moments
                  That Last Forever
                </h1>
                <p className='animated fadeIn mb-4 pb-2'>
                  The service aims to alleviate the stress and overwhelm associated
                  with wedding planning, offering support and guidance every step of
                  the way.
                </p>
                <a href='' className='btn btn-primary py-3 px-5 me-3 animated fadeIn'>
                  Get Started
                </a>
              </div>
              <div className='col-md-6 animated fadeIn'>
                <div className='owl-carousel header-carousel'>
                  <div className='owl-carousel-item'>
                    <img className='img-fluid' src={image} alt='' />
                  </div>
                  <div className='owl-carousel-item'>
                    <img className='img-fluid' src='img/carousel-2-2.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header End */}
          {/* Search Start */}
          <div
            className='container-fluid bg-primary mb-5 wow fadeIn'
            data-wow-delay='0.1s'
            style={{ padding: 35 }}
          >
            <div className='container'>
              <div className='row g-2'>
                <div className='col-md-10'>
                  <div className='row g-2'>
                    <div className='col-md-4'>
                      <input
                        type='text'
                        className='form-control border-0 py-3'
                        placeholder='Search Keyword'
                      />
                    </div>
                    <div className='col-md-4'>
                      <select className='form-select border-0 py-3'>
                        <option selected=''>Service Type</option>
                        <option value={1}>Property Type 1</option>
                        <option value={2}>Property Type 2</option>
                        <option value={3}>Property Type 3</option>
                      </select>
                    </div>
                    <div className='col-md-4'>
                      <select className='form-select border-0 py-3'>
                        <option selected=''>City</option>
                        <option value={1}>Location 1</option>
                        <option value={2}>Location 2</option>
                        <option value={3}>Location 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='col-md-2'>
                  <button className='btn btn-dark border-0 w-100 py-3'>Search</button>
                </div>
              </div>
            </div>
          </div>
          {/* Search End */}
          {/* Category Start */}
          <div className='container-xxl py-5'>
            <div className='container'>
              <div
                className='text-center mx-auto mb-5 wow fadeInUp'
                data-wow-delay='0.1s'
                style={{ maxWidth: 600 }}
              >
                <h1 className='mb-3'>Services Types</h1>
                <p>
                  Explore a wide range of wedding services that will make your special
                  day unforgettable.
                </p>
              </div>
              <div className='row g-4'>
                <div className='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay='0.1s'>
                  <a
                    className='cat-item d-block bg-light text-center rounded p-3'
                    href=''
                  >
                    <div className='rounded p-4'>
                      <div className='icon mb-3'>
                        <i className='fa-solid fa-place-of-worship fa-2xl' />
                      </div>
                      <h6>Venues</h6>
                      <span>
                  Discover breathtaking and customizable wedding venues to suit
                  different styles and preferences.
                </span>
                    </div>
                  </a>
                </div>
                <div className='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay='0.3s'>
                  <a
                    className='cat-item d-block bg-light text-center rounded p-3'
                    href=''
                  >
                    <div className='rounded p-4'>
                      <div className='icon mb-3'>
                        <i className='fa-solid fa-camera fa-2xl' />
                      </div>
                      <h6>Photography and Videography</h6>
                      <span>
                  Professional photographers and videographers to capture the
                  beautiful moments of your wedding day.
                </span>
                    </div>
                  </a>
                </div>
                <div className='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay='0.5s'>
                  <a
                    className='cat-item d-block bg-light text-center rounded p-3'
                    href=''
                  >
                    <div className='rounded p-4'>
                      <div className='icon mb-3'>
                        <i className='fa-solid fa-utensils fa-2xl' />
                      </div>
                      <h6>Catering and Food Services</h6>
                      <span>
                  Delight your guests with exquisite culinary experiences
                  tailored to your taste and dietary preferences.
                </span>
                    </div>
                  </a>
                </div>
                <div className='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay='0.7s'>
                  <a
                    className='cat-item d-block bg-light text-center rounded p-3'
                    href=''
                  >
                    <div className='rounded p-4'>
                      <div className='icon mb-3'>
                        <i className='fa-solid fa-pen fa-2xl' />
                      </div>
                      <h6>Decor and Design</h6>
                      <span>
                  Create an enchanting atmosphere that reflects your personal
                  style and sets the tone for your celebration.
                </span>
                    </div>
                  </a>
                </div>
                {/* Add more categories following the same structure */}
              </div>
            </div>
            {/* <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
              <h1 class="mb-3">Services Types</h1>
              <p>Offering a variety of breathtaking and customizable wedding venues to suit different styles and preferences.</p>
          </div>
          <div class="row g-4">
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                      <div class="rounded p-4">
                          <div class="icon mb-3">
                              <img class="img-fluid" src="img/icon-apartment.png" alt="Icon">
                          </div>
                          <h6>Photography and Videography</h6>
                          <span>Providing professional photographers and videographers to capture the beautiful moments of the wedding day.</span>
                      </div>
                  </a>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                      <div class="rounded p-4">
                          <div class="icon mb-3">
                              <img class="img-fluid" src="img/icon-villa.png" alt="Icon">
                          </div>
                          <h6>Villa</h6>
                          <span>123 Properties</span>
                      </div>
                  </a>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                      <div class="rounded p-4">
                          <div class="icon mb-3">
                              <img class="img-fluid" src="img/icon-house.png" alt="Icon">
                          </div>
                          <h6>Home</h6>
                          <span>123 Properties</span>
                      </div>
                  </a>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                      <div class="rounded p-4">
                          <div class="icon mb-3">
                              <img class="img-fluid" src="img/icon-housing.png" alt="Icon">
                          </div>
                          <h6>Office</h6>
                          <span>123 Properties</span>
                      </div>
                  </a>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                      <div class="rounded p-4">
                          <div class="icon mb-3">
                              <img class="img-fluid" src="img/icon-building.png" alt="Icon">
                          </div>
                          <h6>Building</h6>
                          <span>123 Properties</span>
                      </div>
                  </a>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                      <div class="rounded p-4">
                          <div class="icon mb-3">
                              <img class="img-fluid" src="img/icon-neighborhood.png" alt="Icon">
                          </div>
                          <h6>Townhouse</h6>
                          <span>123 Properties</span>
                      </div>
                  </a>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                      <div class="rounded p-4">
                          <div class="icon mb-3">
                              <img class="img-fluid" src="img/icon-condominium.png" alt="Icon">
                          </div>
                          <h6>Shop</h6>
                          <span>123 Properties</span>
                      </div>
                  </a>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                      <div class="rounded p-4">
                          <div class="icon mb-3">
                              <img class="img-fluid" src="img/icon-luxury.png" alt="Icon">
                          </div>
                          <h6>Garage</h6>
                          <span>123 Properties</span>
                      </div>
                  </a>
              </div>
          </div>
      </div> */}
          </div>
          {/* Category End */}
          {/* About Start */}
          <div className='container-xxl py-5'>
            <div className='container'>
              <div className='row g-5 align-items-center'>
                <div className='col-lg-6 wow fadeIn' data-wow-delay='0.1s'>
                  <div className='about-img position-relative overflow-hidden p-5 pe-0'>
                    <img className='img-fluid w-100' src={require('../HomePage/img/about.png')} />
                  </div>
                </div>
                <div className='col-lg-6 wow fadeIn' data-wow-delay='0.5s'>
                  <h1 className='mb-4'>#1 Place To Find The Perfect Venue</h1>
                  <p className='mb-4'>
                    Discover the ideal wedding venue that will make your special day
                    truly memorable. Tempor erat elitr rebum at clita. Diam dolor diam
                    ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                    et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                  </p>
                  <p>
                    <i className='fa fa-check text-primary me-3' />
                    Explore a wide range of breathtaking and customizable venues
                  </p>
                  <p>
                    <i className='fa fa-check text-primary me-3' />
                    Find venues that suit different styles and preferences
                  </p>
                  <p>
                    <i className='fa fa-check text-primary me-3' />
                    Create the perfect setting for your wedding celebration
                  </p>
                  <a className='btn btn-primary py-3 px-5 mt-3' href=''>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Property List Start */}
          <div className='container-xxl py-5'>
            <div className='container'>
              <div className='row g-0 gx-5 align-items-end'>
                <div className='col-lg-6'>
                  <div
                    className='text-start mx-auto mb-5 wow slideInLeft'
                    data-wow-delay='0.1s'
                  >
                    <h1 className='mb-3'>Services Listing</h1>
                    <p>
                      Discover a comprehensive listing of wedding services that cater
                      to all your needs.
                    </p>
                  </div>
                </div>
                <div
                  className='col-lg-6 text-start text-lg-end wow slideInRight'
                  data-wow-delay='0.1s'
                >
                  <ul className='nav nav-pills d-inline-flex justify-content-end mb-5'>
                    <li className='nav-item me-2'>
                      <a
                        className='btn btn-outline-primary active'
                        data-bs-toggle='pill'
                        href='#tab-1'
                      >
                        Featured
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='tab-content'>
                <div id='tab-1' className='tab-pane fade show p-0 active'>
                  <div className='row g-4'>
                    <div
                      className='col-lg-4 col-md-6 wow fadeInUp'
                      data-wow-delay='0.1s'
                    >
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-1.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            Catering
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Food Services
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Exquisite Catering Experience
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            Customizable Menus
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />
                            Professional Chefs
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />
                            Exceptional Service
                          </small>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-2.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            Catering
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Food Services
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$9,999</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Gourmet Dining Experience
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            456 Avenue, Los Angeles, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            Customized Menu Design
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />
                            Exquisite Presentation
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />
                            Exceptional Culinary Team
                          </small>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 wow fadeInUp'
                      data-wow-delay='0.5s'
                    >
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-3.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            Catering
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Food Services
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$7,777</h5>
                          <a className='d-block h5 mb-2' href=''>
                            International Cuisine Delights
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            789 Boulevard, Paris, France
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            Fusion Flavors
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />
                            Certified Food Safety
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />
                            Attentive Staff
                          </small>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 wow fadeInUp'
                      data-wow-delay='0.1s'
                    >
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-1.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            Catering
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Food Services
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Exquisite Catering Experience
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            Customizable Menus
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />
                            Professional Chefs
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />
                            Exceptional Service
                          </small>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 wow fadeInUp'
                      data-wow-delay='0.3s'
                    >
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-2.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            Catering
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Food Services
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$9,999</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Gourmet Dining Experience
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            456 Avenue, Los Angeles, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            Customized Menu Design
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />
                            Exquisite Presentation
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />
                            Exceptional Culinary Team
                          </small>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 wow fadeInUp'
                      data-wow-delay='0.5s'
                    >
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-3.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            Catering
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Food Services
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$7,777</h5>
                          <a className='d-block h5 mb-2' href=''>
                            International Cuisine Delights
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            789 Boulevard, Paris, France
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            Fusion Flavors
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />
                            Certified Food Safety
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />
                            Attentive Staff
                          </small>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-12 text-center wow fadeInUp'
                      data-wow-delay='0.1s'
                    >
                      <a className='btn btn-primary py-3 px-5' href=''>
                        Browse More Property
                      </a>
                    </div>
                  </div>
                </div>
                <div id='tab-2' className='tab-pane fade show p-0'>
                  <div className='row g-4'>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-1.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Sell
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Appartment
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-2.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Rent
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Villa
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-3.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Sell
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Office
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-4.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Rent
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Building
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-5.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Sell
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Home
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-6.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Rent
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Shop
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 text-center'>
                      <a className='btn btn-primary py-3 px-5' href=''>
                        Browse More Property
                      </a>
                    </div>
                  </div>
                </div>
                <div id='tab-3' className='tab-pane fade show p-0'>
                  <div className='row g-4'>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-1.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Sell
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Appartment
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-2.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Rent
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Villa
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-3.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Sell
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Office
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-4.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Rent
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Building
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-5.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Sell
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Home
                          </div>
                        </div>
                        <div className='p-4 pb-0'>
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='property-item rounded overflow-hidden'>
                        <div className='position-relative overflow-hidden'>
                          <a href=''>
                            <img
                              className='img-fluid'
                              src='img/property-6.jpg'
                              alt=''
                            />
                          </a>
                          <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                            For Rent
                          </div>
                          <div
                            className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                            Shop
                          </div>
                        </div>
                        <div className="p-4 pb-0">
                          <h5 className='text-primary mb-3'>$12,345</h5>
                          <a className='d-block h5 mb-2' href=''>
                            Golden Urban House For Sell
                          </a>
                          <p>
                            <i className='fa fa-map-marker-alt text-primary me-2' />
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className='d-flex border-top'>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-ruler-combined text-primary me-2' />
                            1000 Sqft
                          </small>
                          <small className='flex-fill text-center border-end py-2'>
                            <i className='fa fa-bed text-primary me-2' />3 Bed
                          </small>
                          <small className='flex-fill text-center py-2'>
                            <i className='fa fa-bath text-primary me-2' />2 Bath
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 text-center'>
                      <a className='btn btn-primary py-3 px-5' href=''>
                        Browse More Property
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Property List End */}
          {/* Call to Action Start */}
          <div className='container-xxl py-5'>
            <div className='container'>
              <div className='bg-light rounded p-3'>
                <div
                  className='bg-white rounded p-4'
                  style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}
                >
                  <div className='row g-5 align-items-center'>
                    <div className='col-lg-6 wow fadeIn' data-wow-delay='0.1s'>
                      <img
                        className='img-fluid rounded w-100'
                        src='img/call-to-action.jpg'
                        alt=''
                      />
                    </div>
                    <div className='col-lg-6 wow fadeIn' data-wow-delay='0.5s'>
                      <div className='mb-4'>
                        <h1 className='mb-3'>Contact With Our Certified Agent</h1>
                        <p>
                          Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem
                          kasd vero ipsum sit sit diam justo sed vero dolor duo.
                        </p>
                      </div>
                      <a href='' className='btn btn-primary py-3 px-4 me-2'>
                        <i className='fa fa-phone-alt me-2' />
                        Make A Call
                      </a>
                      <a href='' className='btn btn-dark py-3 px-4'>
                        <i className='fa fa-calendar-alt me-2' />
                        Get Appoinment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='container-xxl py-5'>
            <div className='container'>
              <div
                className='text-center mx-auto mb-5 wow fadeInUp'
                data-wow-delay='0.1s'
                style={{ maxWidth: 600 }}
              >
                <h1 className='mb-3'>Our Clients Say!</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                  lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
                  vero dolor duo.
                </p>
              </div>
              <div
                className='owl-carousel testimonial-carousel wow fadeInUp'
                data-wow-delay='0.1s'
              >
                <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>
                      Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                      ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                      est kasd kasd erat eos
                    </p>
                    <div className='d-flex align-items-center'>
                      <img
                        className='img-fluid flex-shrink-0 rounded'
                        src='img/testimonial-1.jpg'
                        style={{ width: 45, height: 45 }}
                      />
                      <div className='ps-3'>
                        <h6 className='fw-bold mb-1'>Client Name</h6>
                        <small>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>
                      Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                      ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                      est kasd kasd erat eos
                    </p>
                    <div className='d-flex align-items-center'>
                      <img
                        className='img-fluid flex-shrink-0 rounded'
                        src='img/testimonial-2.jpg'
                        style={{ width: 45, height: 45 }}
                      />
                      <div className='ps-3'>
                        <h6 className='fw-bold mb-1'>Client Name</h6>
                        <small>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>
                      Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                      ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                      est kasd kasd erat eos
                    </p>
                    <div className='d-flex align-items-center'>
                      <img
                        className='img-fluid flex-shrink-0 rounded'
                        src='img/testimonial-3.jpg'
                        style={{ width: 45, height: 45 }}
                      />
                      <div className='ps-3'>
                        <h6 className='fw-bold mb-1'>Client Name</h6>
                        <small>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial End */}
          {/* Footer Start */}
          <div
            className='container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn'
            data-wow-delay='0.1s'
          >
            <div className='container py-5'>
              <div className='row g-5'>
                <div className='col-lg-3 col-md-6'>
                  <h5 className='text-white mb-4'>Get In Touch</h5>
                  <p className='mb-2'>
                    <i className='fa fa-map-marker-alt me-3' />
                    123 Street, New York, USA
                  </p>
                  <p className='mb-2'>
                    <i className='fa fa-phone-alt me-3' />
                    +012 345 67890
                  </p>
                  <p className='mb-2'>
                    <i className='fa fa-envelope me-3' />
                    info@example.com
                  </p>
                  <div className='d-flex pt-2'>
                    <a className='btn btn-outline-light btn-social' href=''>
                      <i className='fab fa-twitter' />
                    </a>
                    <a className='btn btn-outline-light btn-social' href=''>
                      <i className='fab fa-facebook-f' />
                    </a>
                    <a className='btn btn-outline-light btn-social' href=''>
                      <i className='fab fa-youtube' />
                    </a>
                    <a className='btn btn-outline-light btn-social' href=''>
                      <i className='fab fa-linkedin-in' />
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
                        src='img/property-1.jpg'
                        alt=''
                      />
                    </div>
                    <div className='col-4'>
                      <img
                        className='img-fluid rounded bg-light p-1'
                        src='img/property-2.jpg'
                        alt=''
                      />
                    </div>
                    <div className='col-4'>
                      <img
                        className='img-fluid rounded bg-light p-1'
                        src='img/property-3.jpg'
                        alt=''
                      />
                    </div>
                    <div className='col-4'>
                      <img
                        className='img-fluid rounded bg-light p-1'
                        src='img/property-4.jpg'
                        alt=''
                      />
                    </div>
                    <div className='col-4'>
                      <img
                        className='img-fluid rounded bg-light p-1'
                        src='img/property-5.jpg'
                        alt=''
                      />
                    </div>
                    <div className='col-4'>
                      <img
                        className='img-fluid rounded bg-light p-1'
                        src='img/property-6.jpg'
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
                    style={{ maxWidth: 400 }}
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
          <a href='#' className='btn btn-lg btn-primary btn-lg-square back-to-top'>
            <i className='bi bi-arrow-up' />
          </a>
        </div>
        {/* JavaScript Libraries */}
        {/* Template Javascript */}
      </>



  );

}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
