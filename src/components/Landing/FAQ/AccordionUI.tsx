import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data } from "./Data";

import "./Accordion.css";

const AccordionUI = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {data.map((item, index) => {
          return (
            <AccordionItem
              className="bg-white text-black"
              key={index}
              value={`${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionUI;
