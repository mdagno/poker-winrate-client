import React from 'react';
import NavBar from './NavBar';
import renderer from 'react-test-renderer';

describe.skip('NavBar component', () => {
  it('NavBar renders correctly', () => {
    const tree = renderer
      .create(<NavBar />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})


