import Container from "../shared/Container";
import Logo from "../shared/Logo";
import Tags from "../ui/Tags";
import Section from "./components/Section"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const companyLinks = [
    { text: "About", url: "/" },
    { text: "Careers", url: "/#services" },
    { text: "Blogs", url: "/#about" },
  ];

  const contactLinks = [
    { text: "help/FAQ", url: "/" },
    { text: "Press", url: "/" },
  ];

  const moreLinks = [
    { text: "Program", url: "/" },
    { text: "Plan", url: "/" },
    { text: "Method", url: "/" },
  ];

  return (
    <footer className="bg-gray-light/10">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-5  px-5  py-10 lg:px-8 lg:py-20">
        <Logo />
        <Section title="Company" list={companyLinks} />
        <Section title="Contact" list={contactLinks} />
        <Section title="More" list={moreLinks} />
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
            <Tags text="Trainers" active />
          </div>
        </section>
      </Container>
      <div className="bg-primary p-5 text-white text-center flex items-center justify-center gap-8">
        <h5>&copy; 2023 All rights Reserved <a href="mailto:gastonallerdev">gastonallerdev</a> </h5>
        <div className="text-3xl flex items-center justify-center gap-4 -ml-4">
          <a target="_blank" href="https://github.com/Gaston-Aller-00">
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gaston-aller-170646263/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;