/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import 'jquery';
import 'bootstrap';

import 'jquery.mmenu';
import 'jquery-nice-select';
// import '../js/main.js';
import '../js/common_scripts.min.js';
import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/product_page.css';
import '../css/custom.css';
import '../css/checkout.css';
import 'owl.carousel';
import '../css/listing.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function CheckoutPage() {
  const style = {};
  $('#other_addr input').on('change', function() {
    if (this.checked) $('#other_addr_c').fadeIn('fast');
    else $('#other_addr_c').fadeOut('fast');
  });
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
    main.src = '../js/main.js';
    main.async = true;
    main.crossOrigin = true;
    main.type = 'text/babel';

    const common_scripts = document.createElement('script');
    common_scripts.src = '../js/common_scripts.min.js';
    common_scripts.async = true;
    common_scripts.crossOrigin = true;
    common_scripts.type = 'text/babel';

    const stickySidebar = document.createElement('script');
    stickySidebar.src = '../js/sticky_sidebar.min.js';
    stickySidebar.async = true;
    stickySidebar.crossOrigin = true;
    stickySidebar.type = 'text/babel';

    const specificListing = document.createElement('script');
    specificListing.src = '../js/specific_listing.js';
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

        {/* GOOGLE WEB FONT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* GOOGLE WEB FONT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div id="page">
        <main className="bg_gray">
          <div className="container margin_30">
            <div className="page_header">
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Category</a>
                  </li>
                  <li>Page active</li>
                </ul>
              </div>
              <h1>Sign In or Create an Account</h1>
            </div>
            {/* /page_header */}
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="step first">
                  <h3>1. User Info and Billing address</h3>
                  <ul className="nav nav-tabs" id="tab_checkout" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        href="#tab_1"
                        role="tab"
                        aria-controls="tab_1"
                        aria-selected="true"
                      >
                        Register
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        href="#tab_2"
                        role="tab"
                        aria-controls="tab_2"
                        aria-selected="false"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content checkout">
                    <div
                      className="tab-pane fade show active"
                      id="tab_1"
                      role="tabpanel"
                      aria-labelledby="tab_1"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <hr />
                      <div className="row no-gutters">
                        <div className="col-6 form-group pr-1">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-6 form-group pl-1">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      {/* /row */}
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Address"
                        />
                      </div>
                      <div className="row no-gutters">
                        <div className="col-6 form-group pr-1">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                          />
                        </div>
                        <div className="col-6 form-group pl-1">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Postal code"
                          />
                        </div>
                      </div>
                      {/* /row */}
                      <div className="row no-gutters">
                        <div className="col-md-12 form-group">
                          <div className="custom-select-form">
                            <select
                              className="wide add_bottom_15"
                              name="country"
                              id="country"
                            >
                              <option value="" selected="">
                                Country
                              </option>
                              <option value="Europe">Europe</option>
                              <option value="United states">
                                United states
                              </option>
                              <option value="Asia">Asia</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* /row */}
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Telephone"
                        />
                      </div>
                      <hr />
                      <div className="form-group">
                        <label className="container_check" id="other_addr">
                          Other billing address
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div id="other_addr_c" className="pt-2">
                        <div className="row no-gutters">
                          <div className="col-6 form-group pr-1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                            />
                          </div>
                          <div className="col-6 form-group pl-1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        {/* /row */}
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Address"
                          />
                        </div>
                        <div className="row no-gutters">
                          <div className="col-6 form-group pr-1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                            />
                          </div>
                          <div className="col-6 form-group pl-1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Postal code"
                            />
                          </div>
                        </div>
                        {/* /row */}
                        <div className="row no-gutters">
                          <div className="col-md-12 form-group">
                            <div className="custom-select-form">
                              <select
                                className="wide add_bottom_15"
                                name="country"
                                id="country_2"
                              >
                                <option value="" selected="">
                                  Country
                                </option>
                                <option value="Europe">Europe</option>
                                <option value="United states">
                                  United states
                                </option>
                                <option value="Asia">Asia</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* /row */}
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Telephone"
                          />
                        </div>
                      </div>
                      {/* /other_addr_c */}
                      <hr />
                    </div>
                    {/* /tab_1 */}
                    <div
                      className="tab-pane fade"
                      id="tab_2"
                      role="tabpanel"
                      aria-labelledby="tab_2"
                      style={{ position: 'relative' }}
                    >
                      <a href="#0" className="social_bt facebook">
                        Login con Facebook
                      </a>
                      <a href="#0" className="social_bt google">
                        Login con Google
                      </a>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password_in"
                          id="password_in"
                        />
                      </div>
                      <div className="clearfix add_bottom_15">
                        <div className="checkboxes float-start">
                          <label className="container_check">
                            Remember me
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </div>
                        <div className="float-end">
                          <a id="forgot" href="#0">
                            Lost Password?
                          </a>
                        </div>
                      </div>
                      <div id="forgot_pw">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email_forgot"
                            id="email_forgot"
                            placeholder="Type your email"
                          />
                        </div>
                        <p>A new password will be sent shortly.</p>
                        <div className="text-center">
                          <input
                            type="submit"
                            defaultValue="Reset Password"
                            className="btn_1"
                          />
                        </div>
                      </div>
                      <hr />
                      <input
                        type="submit"
                        className="btn_1 full-width"
                        defaultValue="Login"
                      />
                    </div>
                    {/* /tab_2 */}
                  </div>
                </div>
                {/* /step */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="step middle payments">
                  <h3>2. Payment and Shipping</h3>
                  <ul>
                    <li>
                      <label className="container_radio">
                        Credit Card
                        <a
                          href="#0"
                          className="info"
                          data-bs-toggle="modal"
                          data-bs-target="#payments_method"
                        />
                        <input type="radio" name="payment" defaultChecked="" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_radio">
                        Paypal
                        <a
                          href="#0"
                          className="info"
                          data-bs-toggle="modal"
                          data-bs-target="#payments_method"
                        />
                        <input type="radio" name="payment" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_radio">
                        Cash on delivery
                        <a
                          href="#0"
                          className="info"
                          data-bs-toggle="modal"
                          data-bs-target="#payments_method"
                        />
                        <input type="radio" name="payment" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_radio">
                        Bank Transfer
                        <a
                          href="#0"
                          className="info"
                          data-bs-toggle="modal"
                          data-bs-target="#payments_method"
                        />
                        <input type="radio" name="payment" />
                        <span className="checkmark" />
                      </label>
                    </li>
                  </ul>
                  <div className="payment_info d-none d-sm-block">
                    <figure>
                      <img src={require("../img/cards_all.svg")} alt="" />
                    </figure>{' '}
                    <p>
                      Sensibus reformidans interpretaris sit ne, nec errem
                      nostrum et, te nec meliore philosophia. At vix quidam
                      periculis. Solet tritani ad pri, no iisque definitiones
                      sea.
                    </p>
                  </div>
                  <h6 className="pb-2">Shipping Method</h6>
                  <ul>
                    <li>
                      <label className="container_radio">
                        Standard shipping
                        <a
                          href="#0"
                          className="info"
                          data-bs-toggle="modal"
                          data-bs-target="#payments_method"
                        />
                        <input type="radio" name="shipping" defaultChecked="" />
                        <span className="checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="container_radio">
                        Express shipping
                        <a
                          href="#0"
                          className="info"
                          data-bs-toggle="modal"
                          data-bs-target="#payments_method"
                        />
                        <input type="radio" name="shipping" />
                        <span className="checkmark" />
                      </label>
                    </li>
                  </ul>
                </div>
                {/* /step */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="step last">
                  <h3>3. Order Summary</h3>
                  <div className="box_general summary">
                    <ul>
                      <li className="clearfix">
                        <em>1x Armor Air X Fear</em> <span>$145.00</span>
                      </li>
                      <li className="clearfix">
                        <em>2x Armor Air Zoom Alpha</em> <span>$115.00</span>
                      </li>
                    </ul>
                    <ul>
                      <li className="clearfix">
                        <em>
                          <strong>Subtotal</strong>
                        </em>{' '}
                        <span>$450.00</span>
                      </li>
                      <li className="clearfix">
                        <em>
                          <strong>Shipping</strong>
                        </em>{' '}
                        <span>$0</span>
                      </li>
                    </ul>
                    <div className="total clearfix">
                      TOTAL <span>$450.00</span>
                    </div>
                    <div className="form-group">
                      <label className="container_check">
                        Register to the Newsletter.
                        <input type="checkbox" defaultChecked="" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <a href="confirm.html" className="btn_1 full-width">
                      Confirm and Pay
                    </a>
                  </div>
                  {/* /box_general */}
                </div>
                {/* /step */}
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </main>
        {/* /main */}
      </div>
      {/* page */}
      <div id="toTop" />
      {/* Back to top button */}
      {/* Modal Payments Method */}
      <div
        className="modal fade"
        id="payments_method"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="payments_method_title"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="payments_method_title">
                Payments Methods
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet, oratio possim ius cu. Labore prompta
                nominavi sea ei. Sea no animal saperet gloriatur, ius iusto
                ullamcorper ad. Qui ignota reformidans ei, vix in elit conceptam
                adipiscing, quaestio repudiandae delicatissimi vis ei. Fabulas
                accusamus no has.
              </p>
              <p>
                Et nam vidit zril, pri elaboraret suscipiantur ut. Duo mucius
                gloriatur at, in vis integre labitur dolores, mei omnis utinam
                labitur id. An eum prodesset appellantur. Ut alia nemore mei, at
                velit veniam vix, nonumy propriae conclusionemque ea cum.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* COMMON SCRIPTS */}
    </>
  );
}
