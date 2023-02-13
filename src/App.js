import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './formular/Dashboard';
import FormContainer from './formular/FormContainer';
import Home from './formular/Home';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FormContainer />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default App;
