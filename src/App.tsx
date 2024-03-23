import './styles/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Plans, Summary } from './pages';
import { StoreProvider } from './store/storeProvider';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreProvider><Home /></StoreProvider>} />
      
          <Route path="/planes" element={  <StoreProvider><Plans /></StoreProvider>} />
          <Route path="/resumen" element={<StoreProvider><Summary /></StoreProvider>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
