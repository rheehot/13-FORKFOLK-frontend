import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoreContents from "./components/CoreContents/CoreContents";
import Stories from "./pages/Stories/Stories";

import Account from "./pages/Account/Account";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartList from "./pages/CartList/CartList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/stories/:category" component={Stories} />
          {/* <Route exact path="/stories" component={Stories} /> */}
          <Route exact path="/Account" component={Account} />
          <Route exact path="/shop/" component={ProductList} />
          <Route
            exact
            path="/product-category/:category"
            component={ProductList}
          />
          <Route exact path="/shop/:id" component={ProductDetail} />
          <Route exact path="/cart/" component={CartList} />
        </Switch>
        <Route path="/" component={Header} />
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default Routes;
