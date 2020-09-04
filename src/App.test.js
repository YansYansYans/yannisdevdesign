import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tarif from './Tarif';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<Tarif />, div);
  ReactDOM.unmountComponentAtNode(div);
});
