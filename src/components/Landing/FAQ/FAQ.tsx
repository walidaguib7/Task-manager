import question from "/question-two-color.svg";

import AccordionUI from "./AccordionUI";
const Faq = () => {
  return (
    <div className="pt-6 px-24 max-sm:px-8">
      <div className="pt-8 pb-8">
        <h2 className="font-semibold text-5xl pb-10 w-full text-center">
          FAQ / Help
        </h2>
        <div className="flex items-center justify-center gap-5">
          <div>
            <img
              className="image w-[450px] h-[400px] max-lg:hidden"
              src={question}
              alt=""
            />
          </div>
          <div className="flex-1">
            <AccordionUI />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
