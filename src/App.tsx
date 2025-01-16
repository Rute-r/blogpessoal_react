import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Cadastro from './pages/cadastro/Cadastro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Cadastro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
