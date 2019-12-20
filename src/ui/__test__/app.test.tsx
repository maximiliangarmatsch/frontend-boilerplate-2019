import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import { appConfig } from '../app.config';

describe('<App />', () => {
  test('renders', () => {
    const app = shallow(<App />);
    expect(app.find('Route').length).toEqual(appConfig.routes.list.length);
  });
});