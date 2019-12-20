import React from 'react';
import { mount } from 'enzyme';
// Template Component
import About from '../about.component';
// Sections Component
import Info from '../../info/info.component';

describe('<About />', () => {
  it('renders', () => {
    const wrapper = mount(<About />);
    const counterWrapper = wrapper.find(Info);
    expect(counterWrapper.html()).toContain('div');
  
  });
});