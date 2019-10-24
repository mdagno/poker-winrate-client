import React from 'react';
import SessionList from './SessionList';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('SessionList component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SessionList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('SessionList renders correctly', () => {
    const tree = renderer
      .create(<SessionList />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})


