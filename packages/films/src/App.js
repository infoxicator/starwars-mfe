import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import FilmsList from './components/FilmsList';

const generateClassName = createGenerateClassName({
  productionPrefix: 'fi',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={FilmsList} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
