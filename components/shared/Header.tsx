import Container from "./Container";
import Logo from "./Logo";
import MainMenu from "./main-menu";


const Header = () => {
  return <header className=" fixed left-0 top-0 w-full p-5 z-40">
    <Container className="flex items-center justify-between" >
        <section><Logo/></section>
        <section>
          <MainMenu/>
        </section>
    </Container>
  </header>;
}; 

export default Header;
