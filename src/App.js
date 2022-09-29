import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import useFastor from "./context/useFastor";

const Home = React.lazy(() => import("./views/Home"));
const Restaurants = React.lazy(() => import("./views/Restaurants"));
const RestaurantDetails = React.lazy(() => import("./views/RestaurantDetails"));

function App() {

  return (
    <React.Suspense fallback={<h4>Loading...</h4>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurents" exact component={Restaurants} />
        <Route path="/restaurents/:id" exact component={RestaurantDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </React.Suspense>
  );
}

export default App;
