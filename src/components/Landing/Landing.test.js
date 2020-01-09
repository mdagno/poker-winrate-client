import React from 'react';
import Landing from './Landing';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Landing component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Landing renders correctly', () => {
    const tree = renderer
      .create(<Landing />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
