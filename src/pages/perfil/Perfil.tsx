import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto m-4 rounded-2xl overflow-hidden font-quicksand">
      <img
        className="w-full h-72 object-cover border-b-8 border-white"
        src="https://ik.imagekit.io/wute/moon.jpg"
        alt="Capa do Perfil"
      />

      <img
        className="rounded-full w-56 mx-auto mt-[-8rem] border-7 border-white relative z-10"
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
      />

      <div
        className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-dark-blue text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;
