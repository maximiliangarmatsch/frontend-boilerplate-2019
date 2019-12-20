import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Componets 
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
// Config
import { routes } from './routes';

function App() {
    return (
        <div>
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
        </div>
    );
}
export default App;