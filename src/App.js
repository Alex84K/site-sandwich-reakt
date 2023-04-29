import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Mein from './Mein/Main';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path='/' element={<Mein />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
