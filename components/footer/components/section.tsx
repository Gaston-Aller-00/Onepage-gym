
//footer section indivual componentizada
//title y array de strings

import Link from 'next/link';
import { FC } from 'react';

interface Link {
  text: string;
  url: string;
}

interface SectionProps {
  title: string;
  list: Link[];
}

const Section: FC<SectionProps> = ({ title, list }) => {
  return (
    <section>
      <h5 className="text-2xl font-semibold  hover:text-primary transition-colors duration-300 mb-5 cursor-pointer">{title}</h5>
      <ul>
        {list.map((link, index) => (
          <li key={index} className="mb-2">
        <Link href={link.url} className=" hover:text-primary transition-colors duration-100 ">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
