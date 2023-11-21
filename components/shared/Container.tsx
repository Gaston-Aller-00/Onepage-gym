import {FC,ReactNode} from 'react'

interface ContainerProps {
    children:ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children,className }) => {
  return <div className="container mx-auto px-5 lg:px-0"></div>;
};

export default Container;
