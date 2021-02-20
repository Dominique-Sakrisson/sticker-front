import logo from './logo.svg';
// import Routes from './components/routes.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './Hompage.js'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Router>
       
       <Switch>
           <Route 
               path='/'
                   exact
                   render={(routerProps) => <HomePage{...routerProps}/>}
           />
          
       </Switch>
   </Router>
      </header>
    </div>
  );
}

export default App;
