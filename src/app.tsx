import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './ui/templates/header/header';
import Footer from './ui/templates/footer/footer';
import { routes } from './routes';
import ErrorBoundary from './utils/error-boundary';
import LocaleProvider from './utils/local-provider';

function App() {
    return (
        <ErrorBoundary>
        <LocaleProvider>
            <Router>
                <Header />
                <Switch>
                    {routes.routes.map(res => {
                        return <Route path={res.path} key={res.id}>
                            {res.component}
                        </Route>
                    })}
                </Switch>
                <Footer />
            </Router>
            </LocaleProvider>
        </ErrorBoundary>
    );
}
export default App;