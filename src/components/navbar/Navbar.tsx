import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('O Usuário foi desconectado com sucesso!');
    navigate('/');
  }

  return (
    <>
      <div className="w-full flex justify-center py-4 bg-cyan-900 text-pink-200">
        <div className="container flex justify-between text-lg">
          <Link to={'/home'} className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            Postagens |
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            | Cadastrar tema | Perfil |{' '}
            <Link to="" onClick={logout} className="text-2xl font-bold">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
