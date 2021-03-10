import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import BudgetEntries from './BudgetEntries.js';
import BudgetTrends from './BudgetTrends.js';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/budget-entries">
            <BudgetEntries api={'http://localhost:8080'}/>
          </Route>
          <Route path="/budget-trends">
            <BudgetTrends />
          </Route>
          <Route path="/">
            <BudgetEntries api={'http://localhost:8080'}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
