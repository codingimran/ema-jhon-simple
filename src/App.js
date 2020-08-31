import React from "react";
import Header from "./components/Header/Header";
import Shop2 from "./components/Shop/Shop2";
import { Route, Switch, Link } from "react-router-dom";
import Manage from "./components/Manage/Manage";
import Order from "./components/Order/Order";
import ProductKey from "./components/ProductKey/ProductKey";
import SuccessImg from "./images/giphy.gif";
import { processOrder } from "./utilities/databaseManager";
const App = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      <Switch>
        <Route exact path="/" component={Shop2} />
        <Route exact path="/shop" component={Shop2} />
        <Route exact path="/product/:key" component={ProductKey} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/manage" component={Manage} />
        <Route
          exact
          path="/order-success"
          render={() => {
            return (
              <div className="tc">
                {window.alert("Your order will placed soon")}
                <div>
                  <Link to="/">
                    <button className="btn btn-success mt2">Go Home</button>
                  </Link>
                </div>
                <img className="mt3" src={SuccessImg} alt="Happy" />
              </div>
            );
          }}
        />
        <Route
          path="*"
          render={() => (
            <div className="tc mt4">
              <h1>Sorry, page not found</h1>
              <h3 className="mt3">
                <code>404 Error</code>
              </h3>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
