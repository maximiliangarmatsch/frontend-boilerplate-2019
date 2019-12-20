import React from 'react';
import { mount, shallow } from 'enzyme';
// Main Component
import App from '../app.module';
// Template Component
import Header from '../components/header/header.module';
import Footer from '../components/footer/footer.module';

describe('<App />', () => {
  it('renders', () => {
    const app = shallow(<App />);
    expect(app.contains(<Header />)).toEqual(true);
    expect(app.contains(<Footer />)).toEqual(true);
    expect(app.find('Route').length).toEqual(2);

    const routes = app.find('Route');
    expect(routes.at(0).prop('path')).toEqual('/about');
    expect(routes.at(1).prop('path')).toEqual('/contact');

  });
});