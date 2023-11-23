//cars plan , que van todas en Plans
import { FC } from "react";
import ButtonPrimary from "./button-primary";
import { cn } from "@/libs/utils";

interface PlanProps {
  name: string;
  duration: number;
  price: number;
  priceMounth: number;
  active?:boolean;
}
const Plan: FC<PlanProps> = ({ name, duration, price, priceMounth,active }) => {
  return (
    <div className={cn(
        "w-full bg-gray-light/30 p-8 rounded-xl flex flex-col items-center gap-y-10 ", active && ' relative border-2 border-primary'
    )}>
        {active && (
            <div className="absolute bg-primary text-white py-2 px-4 -top-4 left-1/2 -translate-x-1/2"> <h5>Recomended</h5></div>
        )}
        
      <h2 className="text-3xl text-white font-medium">{name}</h2>
      <h3 className="text-gray-400">{duration} Month Plan</h3>
      <h1 className="text-5xl font-semibold text-white">${price}</h1>
      <h3>{priceMounth}/Month</h3>
      <ButtonPrimary
        type="button"
        text="Select planm"
        className="border-2 border-primary bg-transparent hover:bg-transparent w-full "
      />
    </div>
  );
};

export default Plan;
