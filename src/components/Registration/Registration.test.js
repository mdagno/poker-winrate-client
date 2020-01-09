import React from 'react';
import Registration from './Registration';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Registration component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(     
      <BrowserRouter>
          <Registration />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Registration renders correctly', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})


