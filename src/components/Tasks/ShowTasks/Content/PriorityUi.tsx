import { Models } from "appwrite";
import { PriorityType } from "../../TaskTypes";
import HintUi from "./HintUi";

type Types = {
  doc: Models.Document;
};

const PriorityUi = ({ doc }: Types) => {
  if (doc.Priority == PriorityType.High) {
    return (
      <HintUi label="Priority">
        <span className="text-red-600 mt-2 text-lg">High</span>
      </HintUi>
    );
  } else if (doc.Priority == PriorityType.Medium) {
    return (
      <HintUi label="Priority">
        <span className="text-blue-500 mt-2 text-lg">Medium</span>
      </HintUi>
    );
  } else {
    return (
      <HintUi label="Priority">
        <span className="text-green-500 mt-2 text-lg">Low</span>
      </HintUi>
    );
  }
};

export default PriorityUi;
