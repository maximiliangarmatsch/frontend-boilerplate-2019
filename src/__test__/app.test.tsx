import React from 'react';
import { shallow } from 'enzyme';
// Main Component
import App from '../app.module';
// Template Component
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';

describe('<App />', () => {
  test('renders', () => {
    const app = shallow(<App />);
    expect(app.contains(<Header />)).toEqual(true);
    expect(app.contains(<Footer />)).toEqual(true);
    expect(app.find('Route').length).toEqual(1);

    const routes = app.find('Route');
    expect(routes.at(0).prop('path')).toEqual('/about');
  });
});