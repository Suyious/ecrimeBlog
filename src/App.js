import './App.css';
import Content from './Content';
import Navigation from './Navigation';
import ViewPager from './ViewPager';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ViewPager/>
      <Content/>
    </div>
  );
}

export default App;
