import React from 'react';
import HomePage from './HomePage';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('HomePage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('HomePage renders correctly', () => {
    const tree = renderer
      .create(<HomePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
