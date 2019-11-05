import React from 'react';
import NavBar from './NavBar';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('NavBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('NavBar renders correctly', () => {
    const tree = renderer
      .create(<NavBar />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})


