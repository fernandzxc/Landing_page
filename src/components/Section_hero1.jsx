import Escalable from "./Escalable";

const Section_hero1 = () => {
  return (
    <div className="flex justify-around py-24">
      <Escalable
        img={"window.svg"}
        title={"Full Responsive"}
        parrafo={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum ducimus esse, doloremque sapiente ea pariatur porro"
        }
      />

      <Escalable
        img={"layers.svg"}
        title={"Escalable"}
        parrafo={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum ducimus esse, doloremque sapiente ea pariatur porro"
        }
      />

      <Escalable
        img={"terminal.svg"}
        title={"Facil de Usar"}
        parrafo={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum ducimus esse, doloremque sapiente ea pariatur porro"
        }
      />
    </div>
  );
};

export default Section_hero1;
