import React from 'react';
import SessionForm from './SessionForm';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('SessionForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SessionForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('SessionForm renders correctly', () => {
    const tree = renderer
      .create(<SessionForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})

