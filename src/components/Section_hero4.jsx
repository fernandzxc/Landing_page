const Section_hero4 = ({ title, img, paragraph }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-96">
      <img className="w-64 rounded-full shadow-md shadow-black" src={img} />
      <div className="justify-center text-center">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="font-semibold text-lg ">{paragraph}</p>
      </div>
    </div>
  );
};

export default Section_hero4;
