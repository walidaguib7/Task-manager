
import NoData from "/NoData.svg";
const NotFound = () => {
  return (
    <section className="flex items-center flex-col gap-5 justify-center mt-[60px]">
      <img src={NoData} className="w-[200px]  " alt="" />
      <span>No Data Found</span>
    </section>
  );
};

export default NotFound;
