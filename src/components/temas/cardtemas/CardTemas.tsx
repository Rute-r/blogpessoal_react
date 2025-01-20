import { Link } from 'react-router-dom';
import Tema from '../../../models/Tema';

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between font-quicksand">
      <header className="py-2 px-6 bg-dark-blue text-slate-100 font-semibold text-2xl text-center">
        Tema
      </header>
      <p className="p-8 text-3xl bg-slate-100 h-full">{tema.descricao}</p>

      <div className="flex">
        <Link
          to={`/editartema/${tema.id}`}
          className="w-full text-slate-100 bg-dark-blue hover:bg-gray-blue flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletartema/${tema.id}`}
          className="text-dark-blue bg-light-pink hover:bg-pink-purple w-full 
                    flex items-center justify-center">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
