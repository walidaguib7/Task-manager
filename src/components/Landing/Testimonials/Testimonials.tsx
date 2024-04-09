import { data } from "../Testimonials/Items";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
type ItemsType = {
  Fullname: string;
  Job: string;
  Photo: string;
  Description: string;
};
const Testimonials = () => {
  return (
    <div className="pt-6 px-24 max-sm:px-8">
      <div className="pb-8">
        <h2 className="font-semibold text-5xl pb-10 w-full text-center">
          Testimonials
        </h2>
        <div className="flex flex-wrap gap-16  justify-center">
          {data.map((item: ItemsType, index: number) => {
            return (
              <Card
                className="p-5"
                style={{ height: "fit-content", width: "400px" }}
                key={index}>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between w-full  items-center ">
                    <div className="flex flex-col  gap-3">
                      <h2 className="text-[18px] font-bold">{item.Fullname}</h2>
                      <p className="font-bold text-[14px]">{item.Job}</p>
                    </div>
                    <div>
                      <Avatar>
                        <AvatarImage src={item.Photo} />
                      </Avatar>
                    </div>
                  </div>
                  <p className="w-[240px] font-normal text-[16px]">
                    {item.Description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
