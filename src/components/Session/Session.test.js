import React from 'react';
import Session from './Session'
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'

describe('Session component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
       <Session />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Session renders correctly', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
       <Session />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  
})
