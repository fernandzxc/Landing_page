const Section_hero2 = ({ title, img, paragraph, flex_reverse }) => {
  return (
    <div className={`flex ${flex_reverse}`}>
      <div className="flex flex-col items-center justify-center w-1/2">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="w-[30rem] text-xl font-light text-justify">{paragraph}</p>
      </div>
      <img className="w-1/2" src={img} alt="" />
    </div>
  );
};

export default Section_hero2;
