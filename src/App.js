import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BlogPage from './BlogPage';
import Home from './Home';
import Navigation from './Navigation';
import {Blogs} from "./BlogsJSON";
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          {Blogs.map(blog=>(
            <Route key={blog.key} path={`/blog/${blog.key}`} component={() => <BlogPage Image={blog.image} Title={blog.heading} body={blog.body}/>}/>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
