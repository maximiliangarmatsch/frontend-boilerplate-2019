import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './ui/templates/header/header';
import Footer from './ui/templates/footer/footer';
import { routes } from './routes';
import ErrorBoundary from './utils/error-boundary';
import { CssBaseline } from '@material-ui/core';

function App() {
    return (
        <ErrorBoundary>
                <CssBaseline/>
                <Router>
                    <Header />
                    <React.Fragment>
                        <Switch>
                            {routes.routes.map(res => {
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
                    <Footer />
                </Router>
        </ErrorBoundary>
    );
}
export default App;