import React from 'react';
import { render } from 'enzyme';
// Template Component
import Header from './header.template';

describe('<Header />', () => {
  it('renders', () => {
    const wrapper = render(<Header />);
    expect(wrapper.find('footer'));
  });
});