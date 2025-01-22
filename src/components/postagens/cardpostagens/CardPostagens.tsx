import { Link } from 'react-router';
import Postagem from '../../../models/Postagem';

interface CardPostagemProps {
  postagem: Postagem;
}

function CardPostagens({ postagem }: CardPostagemProps) {
  return (
    <div className="border-x-dark-blue flex flex-col rounded-2xl overflow-hidden justify-between font-quicksand">
      <div>
        <div className="flex w-full bg-dark-blue py-2 px-4 items-center gap-4">
          <img src={postagem.usuario?.foto} className="h-12 rounded-full" alt={postagem.usuario?.nome} />
          <h3 className="text-light-pink text-lg font-semibold text-center uppercase">
            {postagem.usuario?.nome}
          </h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao}</p>
          <p>
            Data:{' '}
            {new Intl.DateTimeFormat(undefined, { dateStyle: 'full', timeStyle: 'medium' }).format(
              new Date(postagem.data)
            )}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
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
