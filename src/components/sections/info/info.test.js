import React from 'react';
import ReactDOM from 'react-dom';
import Info from './info.section';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Info />, div);
  ReactDOM.unmountComponentAtNode(div);
});