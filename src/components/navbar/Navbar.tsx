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
      <div className="w-full flex justify-center py-4 bg-dark-blue text-light-pink font-quicksand">
        <div className="container flex justify-between text-lg">
          <Link to={'/home'} className="text-2xl font-semibold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>{' '}
            |
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            |
            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar tema
            </Link>{' '}
            | Perfil |{' '}
            <Link to="" onClick={logout} className="text-2xl font-semibold">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
