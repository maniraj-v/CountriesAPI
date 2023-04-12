import "./styles.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Country from "./Pages/Country";

export default function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/:countryName' children={<Country />} />
        </Switch>
      </Router>
    </main>
  );
}
