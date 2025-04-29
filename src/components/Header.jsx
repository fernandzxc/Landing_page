import { BiMenu } from "react-icons/bi";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-5 bg-blue-600 shadow-lg">
      <a href="@" className="text-[26px] font-medium">
        <BiMenu className="size-10" />
      </a>
      <button className="bg-green-600 text-white p-2 rounded-[6px] text-base">
        Registrarse
      </button>
    </header>
  );
};

export default Header;
