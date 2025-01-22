import ListaPostagens from '../../components/postagens/listapostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalpostagem/ModalPostagem';

function Home() {
  return (
    <>
      <div className="bg-dark-blue flex justify-center font-quicksand">
        <div className="container grid grid-cols-2 text-light-pink">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-semibold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/wute/Ibagem.png?updatedAt=1737570557121"
              alt="Imagem Página Home"
              className="rounded-full w-1.5/3"
            />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
