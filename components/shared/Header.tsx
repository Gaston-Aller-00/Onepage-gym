import React from "react";

type Props = {};

const Header = (props: Props) => {
  return <header className="bg-red-500 fixed left-0 top-0 w-full">
    <div className="flex items-center justify-between container mx-auto">
        <section>LOGO</section>
        <section>MENU</section>
    </div>
  </header>;
}; 

export default Header;
