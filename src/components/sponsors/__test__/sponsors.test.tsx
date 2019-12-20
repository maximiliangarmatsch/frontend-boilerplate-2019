import React from 'react';
import { render } from 'enzyme';
// Section Component
import Sponsors from '../sponsors.component';

describe('<Sponsors />', () => {
  it('renders', () => {
    const wrapper = render(<Sponsors />);
    expect(wrapper.find('Grid'));
  });
});