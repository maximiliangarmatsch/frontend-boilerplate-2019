import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componets 
import Header from './sections/header/header.section';
import Footer from './sections/footer/footer.section';
// Views
import VAbout from './views/about/about.view';
import VContact from './views/contact/contact.view';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path='/about' component={VAbout} />
					<Route path='/contact' component={VContact} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
export default App;