import React from 'react';
import { mount } from 'enzyme';
// Template Component
import About from './about.template';
// Sections Component
import Info from '../../sections/info/info.section';

describe('<About />', () => {
  it('renders', () => {
    const wrapper = mount(<About />);
    const counterWrapper = wrapper.find(Info);
    expect(counterWrapper.html()).toContain('div');
  
  });
});