import { ReactNode, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info');
    navigate('/');
  }

  let component: ReactNode;

  if (usuario.token !== '') {
    component = (
      <div className="w-full flex justify-center py-4 bg-dark-blue text-light-pink font-quicksand">
        <div className="container flex justify-between text-lg">
          <Link to={'/home'} className="text-2xl font-semibold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>
            |
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            |
            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar tema
            </Link>
            |
            <Link to="/perfil" className="hover:underline">
              Perfil
            </Link>
            |
            <Link to="" onClick={logout} className="text-2xl font-semibold">
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Navbar;
