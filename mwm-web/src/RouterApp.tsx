import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dados from './pages/Dados';
import Previsao from './pages/Previsao';

function RouterApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/dados' element={<Dados />} />
          <Route path='/previsao' element={<Previsao />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;