import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Auth from './components/auth/AuthCard';
import Hostel from './components/hostel/Hostel';

function App() {
  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });

  let route = (
    <Fragment>
      <Route path='/' exact component={Auth} />
      <Redirect to='/' />
    </Fragment>
  );
  if (isLogin) {
    route = (
      <Fragment>
        <Route path='/home' component={Hostel} />
        <Redirect to='/home' />
      </Fragment>
    );
  }
  return (
    <div className='container'>
      <Switch>{route}</Switch>
    </div>
  );
}

export default App;
