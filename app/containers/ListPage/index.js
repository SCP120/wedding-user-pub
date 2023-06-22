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

export default function ListPage() {
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
        <script src="https://unpkg.com/react@17/umd/react.development.js" crossOrigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossOrigin></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <link rel="shortcut icon" href="" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          href={require('../img/apple-touch-icon-57x57-precomposed.png')}
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="72x72"
          href={require('../img/apple-touch-icon-72x72-precomposed.png')}
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="114x114"
          href={require('../img/apple-touch-icon-114x114-precomposed.png')}
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="144x144"
          href={require('../img/apple-touch-icon-144x144-precomposed.png')}
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
        {/* BASE CSS */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        {/* SPECIFIC CSS */}
        <link href="css/listing.css" rel="stylesheet" />
        {/* YOUR CUSTOM CSS */}
        <link href="css/custom.css" rel="stylesheet" />
      </Helmet>
      {/* Favicons */}

      <div id="page" className="theia-exception">
        <main>
          <div className="top_banner">
            <div
              className="opacity-mask d-flex align-items-center"
              data-opacity-mask="rgba(0, 0, 0, 0.3)"
            >
              <div className="container">
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
                <h1>Shoes - Grid listing</h1>
              </div>
            </div>
            <img
              src={require('../img/bg_cat_shoes.jpg')}
              className="img-fluid"
              alt=""
            />
          </div>
          {/* /top_banner */}
          <div id="stick_here" />
          <div className="toolbox elemento_stick">
            <div className="container">
              <ul className="clearfix">
                <li>
                  <div className="sort_select">
                    <select name="sort" id="sort">
                      <option value="popularity" selected="selected">
                        Sort by popularity
                      </option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by newness</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">Sort by price: high to</option>
                    </select>
                  </div>
                </li>
                <li>
                  <a href="#0">
                    <i className="ti-view-grid" />
                  </a>
                  <a href="listing-row-1-sidebar-left.html">
                    <i className="ti-view-list" />
                  </a>
                </li>
                <li>
                  <a href="#0" className="open_filters">
                    <i className="ti-filter" />
                    <span>Filters</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /toolbox */}
          <div className="container margin_30">
            <div className="row">
              <aside className="col-lg-3" id="sidebar_fixed">
                <div className="filter_col">
                  <div className="inner_bt">
                    <a href="#" className="open_filters">
                      <i className="ti-close" />
                    </a>
                  </div>
                  <div className="filter_type version_2">
                    <h4>
                      <a
                        href="#filter_1"
                        data-bs-toggle="collapse"
                        className="opened"
                      >
                        Categories
                      </a>
                    </h4>
                    <div className="collapse show" id="filter_1">
                      <ul>
                        <li>
                          <label className="container_check">
                            Men <small>12</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Women <small>24</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Running <small>23</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Training <small>11</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                      </ul>
                    </div>
                    {/* /filter_type */}
                  </div>
                  {/* /filter_type */}
                  <div className="filter_type version_2">
                    <h4>
                      <a
                        href="#filter_2"
                        data-bs-toggle="collapse"
                        className="opened"
                      >
                        Color
                      </a>
                    </h4>
                    <div className="collapse show" id="filter_2">
                      <ul>
                        <li>
                          <label className="container_check">
                            Blue <small>06</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Red <small>12</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Orange <small>17</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Black <small>43</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /filter_type */}
                  <div className="filter_type version_2">
                    <h4>
                      <a
                        href="#filter_3"
                        data-bs-toggle="collapse"
                        className="closed"
                      >
                        Brands
                      </a>
                    </h4>
                    <div className="collapse" id="filter_3">
                      <ul>
                        <li>
                          <label className="container_check">
                            Adidas <small>11</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Nike <small>08</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Vans <small>05</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Puma <small>18</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /filter_type */}
                  <div className="filter_type version_2">
                    <h4>
                      <a
                        href="#filter_4"
                        data-bs-toggle="collapse"
                        className="closed"
                      >
                        Price
                      </a>
                    </h4>
                    <div className="collapse" id="filter_4">
                      <ul>
                        <li>
                          <label className="container_check">
                            $0 — $50<small>11</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            $50 — $100<small>08</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            $100 — $150<small>05</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            $150 — $200<small>18</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /filter_type */}
                  <div className="buttons">
                    <a href="#0" className="btn_1">
                      Filter
                    </a>{' '}
                    <a href="#0" className="btn_1 gray">
                      Reset
                    </a>
                  </div>
                </div>
              </aside>
              {/* /col */}
              <div className="col-lg-9">
                <div className="row row_item">
                  <div className="col-sm-4">
                    <figure>
                      <span className="ribbon off">-30%</span>
                      <a href="">
                        <img
                          className="img-fluid lazy"
                          src={require('../img/products/product_placeholder_square_medium.jpg')}
                          data-src={require('../img/products/shoes/1.jpg')}
                          alt=""
                        />
                      </a>
                      <div data-countdown="2019/05/15" className="countdown" />
                    </figure>
                  </div>
                  <div className="col-sm-8">
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star" />
                    </div>
                    <a href="product-detail-1.html">
                      <h3>Armor Air x Fear</h3>
                    </a>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident...
                    </p>
                    <div className="price_box">
                      <span className="new_price">$48.00</span>
                      <span className="old_price">$60.00</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" className="btn_1">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to favorites"
                        >
                          <i className="ti-heart" />
                          <span>Add to favorites</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to compare"
                        >
                          <i className="ti-control-shuffle" />
                          <span>Add to compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row_item */}
                <div className="row row_item">
                  <div className="col-sm-4">
                    <figure>
                      <span className="ribbon off">-30%</span>
                      <a href="product-detail-1.html">
                        <img
                          className="img-fluid lazy"
                          src={require('../img/products/product_placeholder_square_medium.jpg')}
                          data-src={require('../img/products/shoes/2.jpg')}
                          alt=""
                        />
                      </a>
                      <div data-countdown="2019/05/15" className="countdown" />
                    </figure>
                  </div>
                  <div className="col-sm-8">
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star" />
                    </div>
                    <a href="product-detail-1.html">
                      <h3>Armor Okwahn II</h3>
                    </a>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident...
                    </p>
                    <div className="price_box">
                      <span className="new_price">$90.00</span>
                      <span className="old_price">$170.00</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" className="btn_1">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to favorites"
                        >
                          <i className="ti-heart" />
                          <span>Add to favorites</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to compare"
                        >
                          <i className="ti-control-shuffle" />
                          <span>Add to compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row_item */}
                <div className="row row_item">
                  <div className="col-sm-4">
                    <figure>
                      <span className="ribbon off">-50%</span>
                      <a href="product-detail-1.html">
                        <img
                          className="img-fluid lazy"
                          src={require('../img/products/product_placeholder_square_medium.jpg')}
                          data-src={require('../img/products/shoes/3.jpg')}
                          alt=""
                        />
                      </a>
                      <div data-countdown="2019/05/15" className="countdown" />
                    </figure>
                  </div>
                  <div className="col-sm-8">
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star" />
                    </div>
                    <a href="product-detail-1.html">
                      <h3>Armor Air Wildwood ACG</h3>
                    </a>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident...
                    </p>
                    <div className="price_box">
                      <span className="new_price">$75.00</span>
                      <span className="old_price">$155.00</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" className="btn_1">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to favorites"
                        >
                          <i className="ti-heart" />
                          <span>Add to favorites</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to compare"
                        >
                          <i className="ti-control-shuffle" />
                          <span>Add to compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row_item */}
                <div className="row row_item">
                  <div className="col-sm-4">
                    <figure>
                      <span className="ribbon new">New</span>
                      <a href="product-detail-1.html">
                        <img
                          className="img-fluid lazy"
                          src={require('../img/products/product_placeholder_square_medium.jpg')}
                          data-src={require('../img/products/shoes/4.jpg')}
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-sm-8">
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star" />
                    </div>
                    <a href="product-detail-1.html">
                      <h3>Armor ACG React Terra</h3>
                    </a>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident...
                    </p>
                    <div className="price_box">
                      <span className="new_price">$110.00</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" className="btn_1">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to favorites"
                        >
                          <i className="ti-heart" />
                          <span>Add to favorites</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to compare"
                        >
                          <i className="ti-control-shuffle" />
                          <span>Add to compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row_item */}
                <div className="row row_item">
                  <div className="col-sm-4">
                    <figure>
                      <span className="ribbon new">New</span>
                      <a href="product-detail-1.html">
                        <img
                          className="img-fluid lazy"
                          src={require('../img/products/product_placeholder_square_medium.jpg')}
                          data-src={require('../img/products/shoes/5.jpg')}
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-sm-8">
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star" />
                    </div>
                    <a href="product-detail-1.html">
                      <h3>Armor Air Zoom Alpha</h3>
                    </a>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident...
                    </p>
                    <div className="price_box">
                      <span className="new_price">$140.00</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" className="btn_1">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to favorites"
                        >
                          <i className="ti-heart" />
                          <span>Add to favorites</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to compare"
                        >
                          <i className="ti-control-shuffle" />
                          <span>Add to compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row_item */}
                <div className="row row_item">
                  <div className="col-sm-4">
                    <figure>
                      <span className="ribbon new">New</span>
                      <a href="product-detail-1.html">
                        <img
                          className="img-fluid lazy"
                          src={require('../img/products/product_placeholder_square_medium.jpg')}
                          data-src={require('../img/products/shoes/6.jpg')}
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-sm-8">
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star" />
                    </div>
                    <a href="product-detail-1.html">
                      <h3>Armor Air Alpha</h3>
                    </a>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident...
                    </p>
                    <div className="price_box">
                      <span className="new_price">$130.00</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" className="btn_1">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to favorites"
                        >
                          <i className="ti-heart" />
                          <span>Add to favorites</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to compare"
                        >
                          <i className="ti-control-shuffle" />
                          <span>Add to compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row_item */}
                <div className="row row_item">
                  <div className="col-sm-4">
                    <figure>
                      <span className="ribbon hot">Hot</span>
                      <a href="product-detail-1.html">
                        <img
                          className="img-fluid lazy"
                          src={require('../img/products/product_placeholder_square_medium.jpg')}
                          data-src={require('../img/products/shoes/7.jpg')}
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="col-sm-8">
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star" />
                    </div>
                    <a href="product-detail-1.html">
                      <h3>Armor Air 98</h3>
                    </a>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident...
                    </p>
                    <div className="price_box">
                      <span className="new_price">$115.00</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" className="btn_1">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to favorites"
                        >
                          <i className="ti-heart" />
                          <span>Add to favorites</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          className="btn_1 gray tooltip-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to compare"
                        >
                          <i className="ti-control-shuffle" />
                          <span>Add to compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /row_item */}
                <div className="pagination__wrapper">
                  <ul className="pagination">
                    <li>
                      <a href="#0" className="prev" title="previous page">
                        ❮
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#0">2</a>
                    </li>
                    <li>
                      <a href="#0">3</a>
                    </li>
                    <li>
                      <a href="#0">4</a>
                    </li>
                    <li>
                      <a href="#0" className="next" title="next page">
                        ❯
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </main>
      </div>
      {/* page */}
      <div id="toTop" />
      {/* Back to top button */}
      {/* COMMON SCRIPTS */}
      {/* SPECIFIC SCRIPTS */}
    </>
  );
}
