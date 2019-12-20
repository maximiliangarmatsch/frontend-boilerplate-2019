import React from 'react';
import { render } from 'enzyme';
// Footer Component
import Footer from '../footer';

describe('<Footer />', () => {
  it('renders', () => {
    const wrapper = render(<Footer />);
    expect(wrapper.find('footer'));
  });
});