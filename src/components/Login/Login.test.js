import React from 'react';
import Login from './Login';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Login component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(     
    <BrowserRouter>
      <Login />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Login renders correctly', () => {
    const tree = renderer
      .create(    
      <BrowserRouter>
        <Login />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})


