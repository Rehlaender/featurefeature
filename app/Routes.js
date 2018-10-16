/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import CounterPage from './containers/CounterPage';
import WriterPage from './containers/WriterPage';
  
export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={WriterPage} />
      <Route path={routes.WRITER} component={WriterPage} />
    </Switch>
  </App>
);
