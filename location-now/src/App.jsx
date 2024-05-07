import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GeolocationViewer from './pages/GeolocationViewer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<GeolocationViewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
