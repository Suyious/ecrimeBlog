import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route to="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
