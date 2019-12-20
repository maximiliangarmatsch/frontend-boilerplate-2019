import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Componets 
import Header from './components/template/header/header.template';
import Footer from './components/template/footer/footer.template';
// Config
import { data } from './app.config';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					{data.routs.map(res => {
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