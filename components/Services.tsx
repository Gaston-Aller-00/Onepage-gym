import Container from "./shared/Container";
import Servcice from "./ui/Service";
import Title from "./ui/Title";

//aca van todos los componentes de service
const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center mb-6 lg:mb-0"
    >
      <Container>
        <Title title="Fitness Plans &" titlePrimary="Nutritions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Servcice
            image="/icons/icon-1.png"
            title="Weight loss"
            description="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ducimus!
"
          />
          <Servcice
            image="/icons/yoga.png"
            title="Classic Yoga"
            description="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ducimus!
"
          />
          <Servcice
            image="/icons/cycling.png"
            title="Cycling"
            description="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ducimus!
"
          />
          <Servcice
            image="/icons/body.png"
            title="Body Building"
            description="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ducimus!
"
          />
          <Servcice
            image="/icons/musculation.png"
            title="Musculation"
            description="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ducimus!
"
          />
          <Servcice
            image="/icons/running.png"
            title="Fitness Running"
            description="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ducimus!
"
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
