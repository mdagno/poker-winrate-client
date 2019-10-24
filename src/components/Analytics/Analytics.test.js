import React from 'react';
import renderer from 'react-test-renderer';
import Analytics from './Analytics';
import ReactDOM from 'react-dom'


describe('Analytics component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Analytics />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Analytics renders correctly', () => {
    const tree = renderer
      .create(<Analytics />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
