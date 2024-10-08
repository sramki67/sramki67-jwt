import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route Component={HomePage} path="/" exact></Route>
          <Route Component={LoginPage} path="/Login"></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;