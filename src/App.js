import './App.css';
import BudgetEntries from './BudgetEntries.js';

function App() {
  return (
    <div className="App">
        <BudgetEntries api={'http://localhost:8080'}/>
    </div>
  );
}

export default App;
