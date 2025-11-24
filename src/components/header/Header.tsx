import { useState } from "react";
import Container from "../common/Container";
import ListItem from "../ui/ListItem";
import type { NavList } from "../../types/navItemTypes";
import { Button } from "../ui/Button";
import Flex from "../ui/Flex";

const Header = () => {
  const [navList, setNavList] = useState<NavList[]>([
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
  ]);
  return (
    <header className="bg-primary text-white py-[15px]">
      <nav>
        <Container>
          <Flex className="justify-between items-center">
            <img src="images/logo.png" alt="logo" />
            <ul className="flex gap-[25px]">
              {navList.map((item) => (
                <ListItem
                  className="text-2xl font-semibold font-anek"
                  key={item.id}
                  item={item}
                />
              ))}
            </ul>
            <Button
              className="font-anek font-semibold text-2xl text-white bg-secondary py-[11px] px-[58px] rounded-[10px]"
              title="কোর্স দেখুন"
            />
          </Flex>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
