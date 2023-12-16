import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Result from './pages/Result';
import Calculator from './pages/Calculator';
import Guest from './pages/Guest';

function App() {
  return (
    <div className="container">
      <div className="calculator">
          <div className="todo-app">
          <Router>
            <Routes>
                <Route path="/" element={<Calculator/>}>
                  <Route index element={<Guest/>}/>
                  <Route path="register" element={<Register/>}/>
                  <Route path="result" element={<Result/>}/>
                </Route>
            </Routes>
          </Router>
        </div>   
      </div>
    </div>
  );
}

export default App;
