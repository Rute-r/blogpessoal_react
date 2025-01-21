import { Link } from 'react-router';

function CardPostagens() {
  return (
    <div className="border-x-dark-blue flex flex-col rounded-2xl overflow-hidden justify-between font-quicksand">
      <div>
        <div className="flex w-full bg-dark-blue py-2 px-4 items-center gap-4">
          <img src="https://i.imgur.com/pK6vSCy.png" className="h-12 rounded-full" alt="" />
          <h3 className="text-light-pink text-lg font-semibold text-center uppercase">Nome do Usuário</h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">Titulo</h4>
          <p>texto</p>
          <p>Tema: </p>
          <p>Data: </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to=""
          className="w-full text-light-pink bg-dark-blue hover:bg-gray-blue flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>
        <Link
          to=""
          className="text-dark-blue bg-light-pink hover:bg-pink-purple w-full flex items-center justify-center">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagens;
