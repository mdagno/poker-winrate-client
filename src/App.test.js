import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import SessionForm from './components/SessionForm/SessionForm';
import NavBar from './components/NavBar/NavBar';
import SessionList from './components/SessionList/SessionList';
import Session from './components/Session/Session'
import Analytics from './components/Analytics/Analytics'
import HomePage from './components/HomePage/HomePage'
import EditSession from './components/EditSession/EditSession'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe.only('The UI of the components render as expected', () => {
  it('HomePage renders correctly', () => {
    const tree = renderer
      .create(<HomePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('SessionList renders correctly', () => {
    const tree = renderer
      .create(<SessionList />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('SessionForm renders correctly', () => {
    const tree = renderer
      .create(<SessionForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('Session renders correctly', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
      <Session />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('EditSession renders correctly', () => {
    const props = { match: {params: {session_id: 1} } };
    const tree = renderer
      .create(<EditSession {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  
  it('NavBar renders correctly', () => {
    const tree = renderer
      .create(<NavBar />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('Analytics renders correctly', () => {
    const tree = renderer
      .create(<Analytics />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})


