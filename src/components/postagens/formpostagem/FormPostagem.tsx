function FormPostagem() {
  return (
    <div className="container flex flex-col mx-auto items-center font-quicksan">
      <h1 className="text-4xl text-center my-8">Cadastrar Postagem</h1>

      <form className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Titulo da Postagem</label>
          <input
            type="text"
            placeholder="Titulo"
            name="titulo"
            required
            className="border-2 border-dark-blue rounded-2xl p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Texto da Postagem</label>
          <input
            type="text"
            placeholder="Texto"
            name="texto"
            required
            className="border-2 border-dark-blue rounded-2xl p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tema da Postagem</p>
          <select name="tema" id="tema" className="border p-2 border-dark-blue rounded-2xl bg-pink-100">
            <option value="" selected disabled>
              Selecione um Tema
            </option>
            <>
              <option>Tema1</option>
            </>
          </select>
        </div>
        <button
          type="submit"
          className="rounded-2xl disabled:bg-gray-blue bg-dark-blue hover:bg-gray-purple
                                        text-white font-bold w-1/2 mx-auto py-2 flex justify-center">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
