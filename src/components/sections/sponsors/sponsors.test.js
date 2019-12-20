import React from 'react';
import ReactDOM from 'react-dom';
import Sponsors from './sponsors.section';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sponsors />, div);
  ReactDOM.unmountComponentAtNode(div);
});