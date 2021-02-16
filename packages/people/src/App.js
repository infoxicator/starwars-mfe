import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import People from './components/People';

const generateClassName = createGenerateClassName({
  productionPrefix: 'pe',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/">
              <People />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
