import Container from "./shared/Container";
import Plan from "./ui/Plan";
import Title from "./ui/Title";

const Plans = () => {
  return (
    <section
      id="plans"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title="Subscribe to" titlePrimary="Plans" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10  ">
          <Plan name="Standar" duration={6} price={4800} priceMounth={800} />
          <Plan
            name="Fitness"
            duration={12}
            price={7200}
            priceMounth={600}
            active
          />
          <Plan
            name="Enter Price"
            duration={24}
            price={12000}
            priceMounth={500}
          />
        </div>
      </Container>
    </section>
  );
};

export default Plans;
