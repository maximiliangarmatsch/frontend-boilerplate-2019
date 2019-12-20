import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer.section';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});