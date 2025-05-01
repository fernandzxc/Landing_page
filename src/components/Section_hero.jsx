import main from "/bg-masthead.jpg"
const Section_hero = () => {
  return (
    <div className="h-[calc(100vh-56px)] bg-cover object-contain bg-center flex flex-col justify-center items-center gap-16" style={{backgroundImage: `url(${main})`}}>
      <h1 className="text-teal-900 text-6xl w-[550px] text-center">
        Genera mas clientes potenciales con una pagina!
      </h1>
      {/* <div className="w-[550px] flex gap-6">
        <input
          className="w-full p-4 rounded-[6px] text-lg outline-none"
          type="text"
          placeholder="Direccion de Email"
        />
        <button
          className="bg-blue-600 text-white p-4 rounded-[6px] text-lg"
          href="@"
        >
          Enviar
        </button>
      </div> */}
    </div>
  );
};

export default Section_hero;
