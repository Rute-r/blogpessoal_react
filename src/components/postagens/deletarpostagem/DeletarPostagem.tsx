function DeletarPostagem() {
  return (
    <div className="container w-1/3 mx-auto font-quicksand">
        <h1 className="text-4xl text-center my-4">Deletar Postagem</h1>

        <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a postagem a seguir?
        </p>

        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-dark-blue text-light-pink font-semibold text-2xl">
                Postagem
            </header>
            <div className="p-4">
                <p className="text-xl h-full">Titulo da Postagem</p>
                <p>Texto da postagem</p>
            </div>
            <div className="flex">
                <button
                className="text-dark-blue bg-light-pink hover:bg-pink-purple w-full py-2">
                    Não
                </button>
                <button 
                className="w-full text-slate-100 bg-dark-blue hover:bg-gray-blue flex items-center justify-center">
                    Sim
                </button>
            </div>
        </div>
    </div>
  )
}

export default DeletarPostagem