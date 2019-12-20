import React from 'react';
import { render } from 'enzyme';
// Part Component
import Container from './container.part';

describe('<Container />', () => {
  it('renders', () => {
    const wrapper = render(<Container />);
    expect(wrapper.find('Grid'));
  });
});