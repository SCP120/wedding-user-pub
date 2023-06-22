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
import 'owl.carousel';
import '../css/listing.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function CartPage() {
  const style = {};
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
      {/* Favicons */}

      <div id="page">
        {/* /header */}
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
              <h1>Cart page</h1>
            </div>
            {/* /page_header */}
            <table className="table table-striped cart-list">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="thumb_cart">
                      <img
                        src={require('../img/products/product_placeholder_square_small.jpg')}
                        data-src={require('../img/products/shoes/1.jpg')}
                        className="lazy"
                        alt="Image"
                      />
                    </div>
                    <span className="item_cart">Armor Air x Fear</span>
                  </td>
                  <td>
                    <strong>$140.00</strong>
                  </td>
                  <td>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={1}
                        id="quantity_1"
                        className="qty2"
                        name="quantity_1"
                      />
                      <div className="inc button_inc">+</div>
                      <div className="dec button_inc">-</div>
                    </div>
                  </td>
                  <td>
                    <strong>$140.00</strong>
                  </td>
                  <td className="options">
                    <a href="#">
                      <i className="ti-trash" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="thumb_cart">
                      <img
                        src={require('../img/products/product_placeholder_square_small.jpg')}
                        data-src={require('../img/products/shoes/2.jpg')}
                        className="lazy"
                        alt="Image"
                      />
                    </div>
                    <span className="item_cart">Armor Okwahn II</span>
                  </td>
                  <td>
                    <strong>$110.00</strong>
                  </td>
                  <td>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={1}
                        id="quantity_2"
                        className="qty2"
                        name="quantity_2"
                      />
                      <div className="inc button_inc">+</div>
                      <div className="dec button_inc">-</div>
                    </div>
                  </td>
                  <td>
                    <strong>$110.00</strong>
                  </td>
                  <td className="options">
                    <a href="#">
                      <i className="ti-trash" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="thumb_cart">
                      <img
                        src={require('../img/products/product_placeholder_square_small.jpg')}
                        data-src={require('../img/products/shoes/3.jpg')}
                        className="lazy"
                        alt="Image"
                      />
                    </div>
                    <span className="item_cart">Armor Air Wildwood ACG</span>
                  </td>
                  <td>
                    <strong>$90.00</strong>
                  </td>
                  <td>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={1}
                        id="quantity_3"
                        className="qty2"
                        name="quantity_3"
                      />
                      <div className="inc button_inc">+</div>
                      <div className="dec button_inc">-</div>
                    </div>
                  </td>
                  <td>
                    <strong>$90.00</strong>
                  </td>
                  <td className="options">
                    <a href="#">
                      <i className="ti-trash" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row add_top_30 flex-sm-row-reverse cart_actions">
              <div className="col-sm-4 text-end">
                <button type="button" className="btn_1 gray">
                  Update Cart
                </button>
              </div>
              <div className="col-sm-8">
                <div className="apply-coupon">
                  <div className="form-group">
                    <div className="row g-2">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="coupon-code"
                          defaultValue=""
                          placeholder="Promo code"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4">
                        <button type="button" className="btn_1 outline">
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /cart_actions */}
          </div>
          {/* /container */}
          <div className="box_cart">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <ul>
                    <li>
                      <span>Subtotal</span> $240.00
                    </li>
                    <li>
                      <span>Shipping</span> $7.00
                    </li>
                    <li>
                      <span>Total</span> $247.00
                    </li>
                  </ul>
                  <a href="cart-2.html" className="btn_1 full-width cart">
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /box_cart */}
        </main>
        {/* /main */}
      </div>
      {/* page */}
      <div id="toTop" />
      {/* Back to top button */}
      {/* COMMON SCRIPTS */}
    </>
  );
}
