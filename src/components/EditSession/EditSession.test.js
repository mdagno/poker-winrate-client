import React from 'react';
import EditSession from './EditSession';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('EditSession component', () => {
  const props = {match: {params: {session_id: 1}}}

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditSession {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('EditSession renders correctly', () => {
    const tree = renderer
      .create(<EditSession {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})


