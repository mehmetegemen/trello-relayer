import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styles from './app.module.css';
import Home from 'pages/home/home';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles['app-header']}>
        <h1>📋ToDo on Trello</h1>        
      </header>
      <Router>
        <Switch>
          <Route to='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
