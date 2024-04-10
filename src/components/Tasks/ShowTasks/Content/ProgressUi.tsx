import { Progress } from "@/components/ui/progress";

import { StatusType } from "../../TaskTypes";

type Types = {
  Status: string;
};

const ProgressUi = ({ Status }: Types) => {
  if (Status == StatusType.Todo) {
    return (
      <Progress
        asChild
        onClick={() => console.log(Status)}
        color="#80ed99"
        value={30}
        max={90}
        className="w-[33%] "
      />
    );
  } else if (Status == StatusType.InProgress) {
    return (
      <Progress
        asChild
        onClick={() => console.log(Status)}
        color="#3a86ff"
        value={60}
        max={90}
        className="w-[66%]"
      />
    );
  } else {
    return (
      <Progress
        asChild
        onClick={() => console.log(Status)}
        color="#ffa62b"
        value={90}
        max={90}
        className="w-[100%]"
      />
    );
  }
};

export default ProgressUi;
