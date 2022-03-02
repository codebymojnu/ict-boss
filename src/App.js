import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/login">
         <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
