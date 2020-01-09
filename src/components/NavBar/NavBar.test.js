import React from 'react';
import NavBar from './NavBar';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(      
    <BrowserRouter>
      <NavBar />
     </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('NavBar renders correctly', () => {
    const tree = renderer
      .create(    
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})


