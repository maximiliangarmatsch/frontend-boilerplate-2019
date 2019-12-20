import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { appConfig } from './app.config';
import ErrorBoundary from '../utils/error-boundary';
import { CssBaseline } from '@material-ui/core';

function App() {

    return (
        <ErrorBoundary>
                <CssBaseline/>
                <Router>
                    <React.Fragment>
                        <Switch>
                            {appConfig.routes.list.map(res => {
                                if (res.exact) {
                                    return <Route exact path={res.path} key={res.id}>
                                        {res.component}
                                    </Route>
                                } else {
                                    return <Route path={res.path} key={res.id}>
                                        {res.component}
                                    </Route>
                                }
                            })}
                        </Switch>
                    </React.Fragment>
                </Router>
        </ErrorBoundary>
    );
}
export default App;