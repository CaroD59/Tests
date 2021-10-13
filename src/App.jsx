import { Switch, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown/index.jsx';
import Checkbox from './components/Checkbox/index.jsx';
import Home from './components/Home/index.jsx';
import './reset.css';

export default function App() {
  return (
    <div className='App'>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dropdown' component={Dropdown} />
          <Route path='/checkbox' component={Checkbox} />
        </Switch>
      </main>
    </div>
  );
}
