import React from 'react';
import { mount } from 'enzyme';
// Template Component
import About from '../about';
// Sections Component
import Info from '../../../components/info/_info';

describe('<About />', () => {
  it('renders', () => {
    const wrapper = mount(<About />);
    const counterWrapper = wrapper.find(Info);
    expect(counterWrapper.html()).toContain('div');
  
  });
});