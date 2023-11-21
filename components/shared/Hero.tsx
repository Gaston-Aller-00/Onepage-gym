import Image from "next/image";
import Container from "./Container";
import ButtonPrimary from "./ui/button-primary";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute bg-gradient-to-tr from-black to-transparent left-0 top-0 w-full h-full">
          <Container>
            <div className="absolute   top-1/2 -translate-y-1/2 space-y-5">
              <h1 className="text-white text-6xl font-semibold">
                {" "}
                Your body <br /> Will transform{" "}
              </h1>
              <p className="text-gray-500">
                We are commited to helping your transform your life <br /> as
                part of our commitment to you{" "}
              </p>
              <div className="flex items-center gap-4 ">
                <ButtonPrimary type="button" text="Get started" />
              
              
                <ButtonPrimary
                  type="button"
                  text="Watch  reviews"
                  className="border-2 border-primary bg-transparent hover:bg-transparent"
                />
                </div>
              
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Hero;
