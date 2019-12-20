import React from 'react';
import { render } from 'enzyme';
// Section Component
import Sponsors from './sponsors.section';

describe('<Sponsors />', () => {
  it('renders', () => {
    const wrapper = render(<Sponsors />);
    expect(wrapper.find('Grid'));
  });
});