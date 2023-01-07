import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home'
import Layout from './components/layout';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from './components/authContext';
import Login from './components/login';

function App() {
  return (
    <AuthContext>
      <Layout>
        <Routes>
          <Route path="/welcome" element={<h5>Welcome</h5>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={ <Home/> }></Route>
        </Routes>
      </Layout>
    </AuthContext>
  );
}

export default App;
