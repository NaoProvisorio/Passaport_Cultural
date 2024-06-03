import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Senha from './pages/Senha/Senha.jsx';
import Erropage from './pages/Erropage/Erropage.jsx'
import Materias from "./pages/Materias/Materias.jsx";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Cadastro" element={<Cadastro />}/>
        <Route path="/Senha" element={<Senha />} />
        <Route path="*" element={<Erropage/>}/>
        <Route path="/Materias" element={<Materias/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
