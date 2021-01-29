import Auth from './components/auth/AuthCard';
import Hostel from './components/hostel/Hostel';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/home' component={Hostel} />
      </Switch>
    </div>
  );
}

export default App;
