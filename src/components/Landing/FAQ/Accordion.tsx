import { Collapse, CollapseProps } from "antd";
import { data } from "./Data";

import "./Accordion.css";

const items: CollapseProps["items"] = data.map((item, index) => {
  return {
    key: index + 1,
    label: item.question,
    children: <p>{item.answer}</p>,
  };
});

const Accordion = () => {
  return (
    <div>
      <Collapse
        className="w-[450px] shadow-xl "
        accordion
        size={"large"}
        style={{}}
        expandIconPosition="end"
        items={items}></Collapse>
    </div>
  );
};

export default Accordion;
