import Section_hero2 from "./Section_hero2";

const Section_hero3 = () => {
  return (
    <div>
      <Section_hero2
        img={"bg-showcase-1.jpg"}
        title={"Diseño Totalmente Responsivo"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat iure aperiam rem odio eius asperiores cumque, corrupti provident, perferendis laborum repellendus voluptate, velit                                           praesentium"
        }
      />
      <Section_hero2
        flex_reverse={"flex-row-reverse"}
        img={"bg-showcase-2.jpg"}
        title={"Escalable Donde Sea"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat iure aperiam rem odio eius asperiores cumque, corrupti provident, perferendis laborum repellendus voluptate, velit                                           praesentium"
        }
      />
      <Section_hero2
        img={"bg-showcase-3.jpg"}
        title={"Facil de Usar y personalizar"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat iure aperiam rem odio eius asperiores cumque, corrupti provident, perferendis laborum repellendus voluptate, velit                                           praesentium"
        }
      />
    </div>
  );
};

export default Section_hero3;
