import { cn } from "@/libs/utils";
import { FC } from "react";

//tags components con el condicional para la que lleve el active se ponga con el color primary 
interface TagsProps {
  text: string;
  active?: boolean;
}

const Tags: FC<TagsProps> = ({ text, active }) => {
  return (
    <span
    className={cn(
      "py-1 px-2 rounded bg-gray-light",
      active && "bg-primary text-white hover:shadow-primary"
    )}
  >
    {text}
  </span>
  );
};

export default Tags;
