const Escalable = ({ img, title, parrafo }) => {
  return (
    <div className={`flex flex-col items-center ${title} gap-4`}>
      <img className="w-36" src={img} alt="" />
      <h1 className="text-black font-semibold text-3xl">{title}</h1>
      <p className="w-[23rem] text-center text-lg font-light">{parrafo}</p>
    </div>
  );
};

export default Escalable;
