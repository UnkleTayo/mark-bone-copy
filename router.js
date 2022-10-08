import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default (
  <Switch>
    <Route path="/" />
    <Route path="/about" />
    <Route path="/motion-design" />
    <Route path="/black-white" />
    <Route path="/pricing" />
    <Route path="/contact" />
    <Route path="/wedding-films" />
    <Route path="/projects/:slug" />
    <Route />
  </Switch>
);
