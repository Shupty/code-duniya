import Container from "../common/Container";
import { Button } from "../ui/Button";
import Title from "../ui/Title";
import Courses_Card from "./Courses_Card";
import img1 from "../../assets/images/course_1.png";
import img2 from "../../assets/images/course_2.png";
import img3 from "../../assets/images/course_3.png";
import { useState } from "react";

const Courses = () => {
  const courseCard = [
    {
      id: 1,
      name: "MERN Stack Development",
      imageurl: img1,
      category: "Web and Software",

      students: "৩০০০ স্টুডেন্ট",

      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
    {
      id: 2,
      name: "UI/UX Design",
      imageurl: img2,
      category: "Graphics & Multimedia",

      students: "৩০০০ স্টুডেন্ট",

      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
    {
      id: 3,
      name: "Professional Video Editing",
      imageurl: img3,
      category: "Films & Media",

      students: "৩০০০ স্টুডেন্ট",

      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
    {
      id: 4,
      name: "MERN Stack Development",
      imageurl: img1,
      category: "Web and Software",

      students: "৩০০০ স্টুডেন্ট",

      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
  ];

  let [showCard, setShowCard] = useState<number>(3);

  let [loading, setLoading] = useState<boolean>(false);

  let courseToShow = courseCard.slice(0, showCard);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowCard(courseCard.length);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="mt-[180px]">
      <Container>
        <Title
          mainTitle="আমাদের কোর্স সমুহ"
          subTitle="আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ"
        />
        <div className="mt-[62px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseToShow.map((item) => (
              <Courses_Card item={item} />
            ))}
          </div>
        </div>
        <Button
          onClick={handleShowMore}
          className="block mx-auto mt-11 font-anek font-semibold text-2xl text-white bg-secondary py-[11px] px-[58px] rounded-[10px]"
          title={loading ? "Loading..." : "আরও কোর্স দেখুন"}
        />
      </Container>
    </section>
  );
};

export default Courses;
