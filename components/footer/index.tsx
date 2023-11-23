import Container from "../shared/Container";
import Logo from "../shared/Logo";
import Tags from "../ui/tags";
import Section from "./components/section";

//aca van las section con el titulo y el array de stings

const Footer = () => {
  return (
    <footer className="bg-gray-light/10">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-5  px-5  py-10 lg:px-8 lg:py-20">
        <Logo />
        <Section title="Company" list={["About", "Careers", "Blogs"]} />
        <Section title="Contact" list={["help/FAQ", "Press"]} />
        <Section title="More" list={["Program", "Plan", "Method"]} />
        <section>
          <h5 className="text-2xl font-semibold text-white mb-5">
            Popular tags
          </h5>
          <div className="flex items-center gap-2 flex-wrap ">
            <Tags text="Abs" />
            <Tags text="Workout" active />
            <Tags text="nutrition" />
            <Tags text="boxing" />
            <Tags text="Gym" />
            <Tags text="Plans" />
            <Tags text="Facilities" />
            <Tags text="Trainers" active/>
          </div>
        </section>
      </Container>
      <div className="bg-primary p-5 text-white text-center">
        <h5>&copy; 2023 All rights Reserved</h5>
      </div>
    </footer>
  );
};

export default Footer;
