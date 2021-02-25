import logo from './logo.svg';
// import Routes from './components/routes.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './Homepage.js'
import DetailsPage from './DetailsPage.js'
import ListPage from './ListPage.js'
import CreatePage from './CreatePage.js'
import Header from './Header';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Router>
       <Header />
       <Switch>
           <Route 
               path='/'
                   exact
                   render={(routerProps) => <HomePage{...routerProps}/>}
           />
           <Route 
               path='/stickers'
                   exact
                   render={(routerProps) => <ListPage{...routerProps}/>}
           />
            <Route 
                path="/stickers/:stickerId" 
                  exact
                  component={DetailsPage} 
            />
          <Route 
               path='/create'
                   exact
                   render={(routerProps) => <CreatePage{...routerProps}/>}
           />
       </Switch>
   </Router>
      </header>
    </div>
  );
}

export default App;
