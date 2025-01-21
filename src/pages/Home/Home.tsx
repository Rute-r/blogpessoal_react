function Home() {
  return (
    <>
      <div className="bg-dark-blue flex justify-center font-quicksand">
        <div className="container grid grid-cols-2 text-light-pink">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-semibold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-light-pink 
                                          border-light-pink border-solid border-2 py-2 px-4">
                Nova Postagem
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/wute/2ba02cc8-8596-48b4-9598-efc5b56c1034_2Fcc4bbedd-0038-4366-a72a-f6bb6df51f3f.png?updatedAt=1737465730994"
              alt="Imagem Página Home"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
