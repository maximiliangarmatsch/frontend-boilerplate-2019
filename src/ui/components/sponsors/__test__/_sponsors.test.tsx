import React from 'react';
import { render } from 'enzyme';
// Section Component
import Sponsors from '../_sponsors';

describe('<Sponsors />', () => {
  it('renders', () => {
    const wrapper = render(<Sponsors />);
    expect(wrapper.find('Grid'));
  });
});