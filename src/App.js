import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
         <Login/>
        </Route>
        <Route path="/javascript">
          <Posts/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
