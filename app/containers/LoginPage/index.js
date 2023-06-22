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
import '../css/account.css';
import 'owl.carousel';
import '../css/listing.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function LoginPage() {
  const style = {};
  $('input[name="client_type"]').on("click", function() {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box").not(targetBox).hide();
    $(targetBox).show();
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
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-8">
                  <div className="box_account">
                    <h3 className="client">Already Client</h3>
                    <div className="form_container">
                      <div className="row no-gutters">
                        <div className="col-lg-6 pr-lg-1">
                          <a href="#0" className="social_bt facebook">
                            Login with Facebook
                          </a>
                        </div>
                        <div className="col-lg-6 pl-lg-1">
                          <a href="#0" className="social_bt google">
                            Login with Google
                          </a>
                        </div>
                      </div>
                      <div className="divider">
                        <span>Or</span>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email*"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          name="password_in"
                          id="password_in"
                          defaultValue=""
                          placeholder="Password*"
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
                          <a id="forgot" href="javascript:void(0);">
                            Lost Password?
                          </a>
                        </div>
                      </div>
                      <div className="text-center">
                        <input
                          type="submit"
                          defaultValue="Log In"
                          className="btn_1 full-width"
                        />
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
                    </div>
                    {/* /form_container */}
                  </div>
                  {/* /box_account */}

                  {/* /row */}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-8">
                  <div className="box_account">
                    <h3 className="new_client">New Client</h3>{" "}
                    <small className="float-right pt-2">* Required Fields</small>
                    <div className="form_container">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email_2"
                          placeholder="Email*"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          name="password_in_2"
                          id="password_in_2"
                          defaultValue=""
                          placeholder="Password*"
                        />
                      </div>
                      <hr />
                      <div className="form-group">
                        <label
                          className="container_radio"
                          style={{ display: "inline-block", marginRight: 15 }}
                        >
                          Private
                          <input
                            type="radio"
                            name="client_type"
                            defaultChecked=""
                            defaultValue="private"
                          />
                          <span className="checkmark" />
                        </label>
                        <label
                          className="container_radio"
                          style={{ display: "inline-block" }}
                        >
                          Company
                          <input
                            type="radio"
                            name="client_type"
                            defaultValue="company"
                          />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="private box">
                        <div className="row no-gutters">
                          <div className="col-6 pr-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name*"
                              />
                            </div>
                          </div>
                          <div className="col-6 pl-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name*"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full Address*"
                              />
                            </div>
                          </div>
                        </div>
                        {/* /row */}
                        <div className="row no-gutters">
                          <div className="col-6 pr-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="City*"
                              />
                            </div>
                          </div>
                          <div className="col-6 pl-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Postal Code*"
                              />
                            </div>
                          </div>
                        </div>
                        {/* /row */}
                        <div className="row no-gutters">
                          <div className="col-6 pr-1">
                            <div className="form-group">
                              <div className="custom-select-form">
                                <select
                                  className="wide add_bottom_10"
                                  name="country"
                                  id="country"
                                >
                                  <option value="" selected="">
                                    Country*
                                  </option>
                                  <option value="Europe">Europe</option>
                                  <option value="United states">United states</option>
                                  <option value="Asia">Asia</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 pl-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Telephone *"
                              />
                            </div>
                          </div>
                        </div>
                        {/* /row */}
                      </div>
                      {/* /private */}
                      <div className="company box" style={{ display: "none" }}>
                        <div className="row no-gutters">
                          <div className="col-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Company Name*"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full Address"
                              />
                            </div>
                          </div>
                        </div>
                        {/* /row */}
                        <div className="row no-gutters">
                          <div className="col-6 pr-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="City*"
                              />
                            </div>
                          </div>
                          <div className="col-6 pl-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Postal Code*"
                              />
                            </div>
                          </div>
                        </div>
                        {/* /row */}
                        <div className="row no-gutters">
                          <div className="col-6 pr-1">
                            <div className="form-group">
                              <div className="custom-select-form">
                                <select
                                  className="wide add_bottom_10"
                                  name="country"
                                  id="country_2"
                                >
                                  <option value="" selected="">
                                    Country*
                                  </option>
                                  <option value="Europe">Europe</option>
                                  <option value="United states">United states</option>
                                  <option value="Asia">Asia</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 pl-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Telephone *"
                              />
                            </div>
                          </div>
                        </div>
                        {/* /row */}
                      </div>
                      {/* /company */}
                      <hr />
                      <div className="form-group">
                        <label className="container_check">
                          Accept <a href="#0">Terms and conditions</a>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="text-center">
                        <input
                          type="submit"
                          defaultValue="Register"
                          className="btn_1 full-width"
                        />
                      </div>
                    </div>
                    {/* /form_container */}
                  </div>
                  {/* /box_account */}
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </main>
          {/*/main*/}
          {/*/footer*/}
        </div>
        {/* page */}
        <div id="toTop" />
        {/* Back to top button */}
        {/* COMMON SCRIPTS */}


      {/* COMMON SCRIPTS */}
    </>
  );
}
