import Footer from "./components/footer";
import Header from "./components/header";
import Section_hero from "./components/Section_hero";
import Section_hero1 from "./components/Section_hero1";
import Section_hero3 from "./components/Section_hero3";
import Section_hero4 from "./components/Section_hero4";

function App() {
  return (
    <>
      <div>
        <Header />
        <Section_hero />
        <Section_hero1 />
        <Section_hero3 />
        <div className="py-20 flex justify-around">
          <Section_hero4
            img={"testimonials-1.jpg"}
            title={"Ramon Perez"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id e dolorem distinctio, nihil, repudiandae harum commodi molestias esse"
            }
          />
          <Section_hero4
            img={"testimonials-2.jpg"}
            title={"Julio Toro"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id e dolorem distinctio, nihil, repudiandae harum commodi molestias esse"
            }
          />
          <Section_hero4
            img={"testimonials-3.jpg"}
            title={"Luisa Gonzalez"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id e dolorem distinctio, nihil, repudiandae harum commodi molestias esse"
            }
          />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
