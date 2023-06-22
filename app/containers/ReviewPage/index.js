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
import '../css/leave_review.css';

import 'owl.carousel';
import '../css/listing.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function ReviewPage() {
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
      <div id="page">
        <main>
          <div className="container margin_60_35">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="write_review">
                  <h1>Write a review for Armor Air X Fear</h1>
                  <div className="rating_submit">
                    <div className="form-group">
                      <label className="d-block">Overall rating</label>
                      <span className="rating mb-0">
                        <input
                          type="radio"
                          className="rating-input"
                          id="5_star"
                          name="rating-input"
                          defaultValue="5 Stars"
                        />
                        <label htmlFor="5_star" className="rating-star" />
                        <input
                          type="radio"
                          className="rating-input"
                          id="4_star"
                          name="rating-input"
                          defaultValue="4 Stars"
                        />
                        <label htmlFor="4_star" className="rating-star" />
                        <input
                          type="radio"
                          className="rating-input"
                          id="3_star"
                          name="rating-input"
                          defaultValue="3 Stars"
                        />
                        <label htmlFor="3_star" className="rating-star" />
                        <input
                          type="radio"
                          className="rating-input"
                          id="2_star"
                          name="rating-input"
                          defaultValue="2 Stars"
                        />
                        <label htmlFor="2_star" className="rating-star" />
                        <input
                          type="radio"
                          className="rating-input"
                          id="1_star"
                          name="rating-input"
                          defaultValue="1 Star"
                        />
                        <label htmlFor="1_star" className="rating-star" />
                      </span>
                    </div>
                  </div>
                  {/* /rating_submit */}
                  <div className="form-group">
                    <label>Title of your review</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="If you could say it in one sentence, what would you say?"
                    />
                  </div>
                  <div className="form-group">
                    <label>Your review</label>
                    <textarea
                      className="form-control"
                      style={{ height: 180 }}
                      placeholder="Write your review to help others learn about this online business"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Add your photo (optional)</label>
                    <div className="fileupload">
                      <input type="file" name="fileupload" accept="image/*" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="checkboxes float-left add_bottom_15 add_top_15">
                      <label className="container_check">
                        Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                        eirmod scaevola sea. Et nec tantas accusamus salutatus,
                        sit commodo veritus te, erat legere fabulas has ut.
                        Rebum laudem cum ea, ius essent fuisset ut. Viderer
                        petentium cu his.
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <a href="confirm.html" className="btn_1">
                    Submit review
                  </a>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </main>
        {/* /main */}
        {/* /footer */}
      </div>
      {/* page */}
      <div id="toTop" />
      {/* Back to top button */}
      {/* COMMON SCRIPTS */}

      {/* COMMON SCRIPTS */}
    </>
  );
}
