import './App.css';
import { MuiNavBar } from './components/MuiNavBar';
import {DrawerAppBar} from './components/Props';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Features} from './components/Features';
import {Home} from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
    <DrawerAppBar/>
     <div className='content'>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/Features">
        <Features/>
        </Route>
      </Switch>

      </div>
    
    </div>
    </Router> 
  );
}

export default App;
