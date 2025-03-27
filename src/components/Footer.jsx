const Footer = () => {
  return (
    <div className="flex justify-between justify-center p-8">
      <div className="">
        <div className="flex gap-10">
          <a className="text-xl text-blue-700" href="@">
            Nosotros
          </a>
          <a className="text-xl text-blue-700" href="@">
            Contacto
          </a>
          <a className="text-xl text-blue-700" href="@">
            Condicones
          </a>
          <a className="text-xl text-blue-700" href="@">
            Politica de Privacidad
          </a>
        </div>
        <p className="text-xl font-extralight">
          Hola. Todos los derechos reservados.
        </p>
      </div>
      <div className="flex gap-5">
        <img className="w-8" src="facebook.svg" alt="" />
        <img className="w-8" src="twitter-x.svg" alt="" />
        <img className="w-8" src="instagram.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
