/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import ListPage from 'containers/ListPage/Loadable';
import CartPage from 'containers/CartPage/Loadable';
import CheckoutPage from 'containers/CheckoutPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import ReviewPage from 'containers/ReviewPage/Loadable';

const AppWrapper = styled.div`
  //max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/chi-tiet" component={FeaturePage} />
          <Route path="/danh-sach" component={ListPage} />
          <Route path="/gio-hang" component={CartPage} />
          <Route path="/thanh-toan" component={CheckoutPage} />
          <Route path="/dang-nhap" component={LoginPage} />
          <Route path="/review" component={ReviewPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>

      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
