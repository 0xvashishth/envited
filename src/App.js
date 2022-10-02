// import logo from './logo.svg';
import './App.css';
import { HomePage } from "./components/Home/HomePage";
import { EventPage } from "./components/EventPage/EventPage";
import { CreateEvent } from "./components/CreateEvent/CreateEvent";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    // <HomePage/>
    <Router>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/event' component={EventPage} />
        <Route exact path='/create' component={CreateEvent} />
      </div>
    </Router>
  );
}

export default App;
