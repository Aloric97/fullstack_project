import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Route,Routes } from 'react-router-dom';
import Cards from './components/card/card';

function App() {
  return (
        <Routes>
          <Route path="/welcome" element={<h5>Welcome</h5>}></Route>
          <Route path="/getLayout" element={<Cards/>}></Route>
        </Routes>
  );
}

export default App;
