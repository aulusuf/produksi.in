// routing
import "./Styles/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Pages/Login";
import Routes from "./Pages/Routes";
import Base from "./Pages/Base";

// import { Sidebar } from "./pages/Sidebar";
// import { SidebarSupervisor } from "./components/supervisor/SidebarSupervisor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pakai useContext

// import UserRouter from './pages/Routes'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/base" exact>
          <Base />
        </Route>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;
