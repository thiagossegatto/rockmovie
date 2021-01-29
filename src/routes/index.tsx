import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Discover from '../pages/Discover';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Discover} />
    <Route path="/details/:id" exact component={Details} />
  </Switch>
);

export default Routes;
