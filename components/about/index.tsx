import Container from "../shared/Container";
import Title from "../ui/Title";
import SectionImages from "./sections/Section-images";
import SectionList from "./sections/Section-list";
// section list y section images se juntan aca 
const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center'
    >
      <Container>
        <Title title='Why Join With' titlePrimary='Us?' />
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
          <SectionList />
          <SectionImages/>
        </div>
      </Container>
    </section>
  );
};

export default About;
