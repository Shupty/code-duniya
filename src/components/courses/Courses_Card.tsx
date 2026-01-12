
import Image from "../ui/Image";
import Flex from "../ui/Flex";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/Button";
import type { coursesType } from "../../types/coursesTypes";
import { FaUser } from "react-icons/fa";


const Courses_Card = ({ item }: { item: coursesType }) => {
  return (
    <div className=" xl:w-[377px] mx-auto font-anek ">
      <Image imgurl={item.imageurl} alt={item.name} />
      <div className="bg-secondary text-white px-4 py-2 rounded-b-[15px] ">
        <Flex className="justify-between">
          <h4 className="text-sm font-medium">{item.name}</h4>
          <h5 className="text-sm font-medium flex items-center"><FaUser />{item.students}</h5>
        </Flex>
        <h2 className="text-2xl font-bold">{item.category}</h2>
        <h2 className="text-sm font-bold flex items-center">
          <FaStar className="text-[gold]" />
          {item.rating}
        </h2>
        <h2 className="flex justify-between items-center text-xl font-bold">
          {item.coursePrice}{" "}
          <Button
            className="font-anek font-semibold text-2xl text-white bg-primary py-3 px-[35px] rounded-[10px]"
            title={item.discoutBtn}
          />
        </h2>
      </div>
    </div>
  );
};

export default Courses_Card;
