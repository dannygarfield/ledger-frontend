import './index.css';
import './App.css';

import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <NavLink to="/budget-entries">Entries</NavLink>
      <br/>
      <NavLink to="/budget-trends">Trends</NavLink>
    </div>
  );
}

export default Menu;
