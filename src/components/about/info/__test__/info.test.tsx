import React from 'react';
import { render } from 'enzyme';
// Section Component
import Info from '../info.component';

describe('<Info />', () => {
  it('renders', () => {
    const wrapper = render(<Info />);
    expect(wrapper.find('Paper'));
  });
});