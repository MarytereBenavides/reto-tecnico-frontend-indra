import './styles/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, Plans, Summary} from './pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planes" element={<Plans />} />
      <Route path="/resumen" element={<Summary />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
