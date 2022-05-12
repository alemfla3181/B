import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";
import MainBoard from './Components/MainBoard';
import Login from './Components/Login';
import Register from './Components/Register';
import Write from './Components/Write';
import Contents from './Components/Contents';

function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<MainBoard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/write" element={<Write />} />
          <Route exact path="/contents/:contentsId" element={<Contents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;