import Container from "../common/Container";
import ListItem from "../ui/ListItem";
import { Button } from "../ui/Button";
import Flex from "../ui/Flex";
import Image from "../ui/Image";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

const Header = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false)
  const navList = [
    {
      id: 1,
      title: "হোম",
    },
    {
      id: 2,
      title: "আমাদের কোর্সসমহ",
    },
    {
      id: 3,
      title: "যোগাযোগ",
    },
    {
      id: 4,
      title: "ক্যারিয়ার গাইডলাইন",
    },
  ];
  return (
    <header className="bg-primary text-white py-[15px]">
      <nav className="relative">
        <Container>
          <Flex className="justify-between items-center ">
            <Image
              className="w-30 lg:w-auto"
              imgurl="images/logo.png"
              alt="logo"
            />
            <ul className="hidden lg:flex gap-[25px]">
              {navList.map((item) => (
                <ListItem
                  className="text-2xl font-semibold font-anek"
                  key={item.id}
                  item={item}
                />
              ))}
            </ul>
          
            {isOpen &&
              <ul className="absolute top-[65px] left-0 w-full px-5 py-5 lg:hidden bg-secondary z-999 gap-[25px]">
              {navList.map((item) => (
                <ListItem
                  className="text-2xl font-semibold font-anek"
                  key={item.id}
                  item={item}
                />
              ))}
            </ul>
            }
            <div className="flex items-center gap-5">
              <Button
                className="font-anek font-semibold lg:text-2xl text-lg text-white bg-secondary py-[11px] lg:px-[58px] px-3 rounded-[10px]"
                title="কোর্স দেখুন"
              />
              <TiThMenu onClick={()=>setIsOpen(!isOpen)} className="lg:hidden text-3xl" />
            </div>
          </Flex>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
