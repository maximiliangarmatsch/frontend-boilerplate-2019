import React from 'react';
import { render, shallow } from 'enzyme';
// Template Component
import Header from '../header.component';

describe('<Header />', () => {
    test('renders', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
    test('header should have links', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('Link').length).toEqual(1);
    });
    test('links should have props', () => {
        const wrapper = shallow(<Header />);
        wrapper.find('Link').forEach(element => {
            expect(typeof element.at(0).prop('to')).toBe('string');
            expect(typeof element.at(0).text()).toBe('string');
        });

    });
});