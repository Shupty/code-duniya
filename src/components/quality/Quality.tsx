import Title from "../ui/Title";
import Quality_Card from "./Quality_Card";
import Container from "../common/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { onClickType } from "../../types/onClickTypes";
import Flex from "../ui/Flex";
import classImg from "../../assets/images/class.png";
import Image from "../ui/Image";
import ListItem from "../ui/ListItem";

const Quality = () => {

 const classList = [
    {
      id: 1,
      title: "সপ্তাহে ২ - ৩ দিন ক্লাস",
    },
    {
      id: 2,
      title: "অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে",
    },
    {
      id: 3,
      title: "মনোরম ক্লাস রুম",
    },
    {
      id: 4,
      title: "অনলাইন ২৪/৭ সাপোর্ট",
    },
    {
      id: 5,
      title: "অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা",
    },
  ];

  const qualityList = [
    {
      id: 1,
      ratio: "৯০%",
      title: "সফলতার হার",
      description:
        "কর্মক্ষেত্রে দক্ষতা অর্জনের জন্য বাস্তব অভিজ্ঞতা প্রয়োজন। সমস্যা সমাধানের বাস্তব পদ্ধতি আমাদের শিক্ষার্থীদের বিশ্বব্যাপী চাকরির বাজারে অন্য যেকোনো প্রতিযোগীর চেয়ে এগিয়ে রাখে। সমস্ত কোর্স চাকরির সম্ভাবনা বিবেচনা করে সাজানো হয়েছে যা আপনাকে একটি উজ্জ্বল ক্যারিয়ারের জন্য প্রস্তুত করে তোলে।",
    },
    {
      id: 2,
      ratio: "১০,০০০ + ",
      title: "ক্যারিয়ার প্লেসমেন্ট",
      description:
        "আমাদের চাকরির স্থান নির্ধারণ বিভাগ ১০,০০০ এরও বেশি দক্ষ শিক্ষার্থীকে প্রতিযোগিতামূলক বিশ্ব বাজারে চাকরি খুঁজে পেতে সাহায্য করেছে। উন্নত ভবিষ্যতের প্রতিশ্রুতি দিয়ে, আমরা শিক্ষার্থীদের ক্রমাগত ক্যারিয়ার সহায়তা প্রদানের মাধ্যমে চাকরির স্থান নির্ধারণের হার সফলভাবে ৬৭% এ উন্নীত করেছি।",
    },
    {
      id: 3,
      ratio: "১০,০০০ + ",
      title: "স্টুডেন্ট এর পছন্দ",
      description:
        "কর্মক্ষেত্রে দক্ষতা অর্জনের জন্য বাস্তব অভিজ্ঞতা প্রয়োজন। সমস্যা সমাধানের বাস্তব পদ্ধতি আমাদের শিক্ষার্থীদের বিশ্বব্যাপী চাকরির বাজারে অন্য যেকোনো প্রতিযোগীর চেয়ে এগিয়ে রাখে। সমস্ত কোর্স চাকরির সম্ভাবনা বিবেচনা করে সাজানো হয়েছে যা আপনাকে একটি উজ্জ্বল ক্যারিয়ারের জন্য প্রস্তুত করে তোলে।",
    },
    {
      id: 4,
      ratio: "৯০%",
      title: "সফলতার হার",
      description:
        "কর্মক্ষেত্রে দক্ষতা অর্জনের জন্য বাস্তব অভিজ্ঞতা প্রয়োজন। সমস্যা সমাধানের বাস্তব পদ্ধতি আমাদের শিক্ষার্থীদের বিশ্বব্যাপী চাকরির বাজারে অন্য যেকোনো প্রতিযোগীর চেয়ে এগিয়ে রাখে। সমস্ত কোর্স চাকরির সম্ভাবনা বিবেচনা করে সাজানো হয়েছে যা আপনাকে একটি উজ্জ্বল ক্যারিয়ারের জন্য প্রস্তুত করে তোলে।",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // ==========
  function SampleNextArrow(props: onClickType) {
    const { onClick } = props;
    return (
      <div
        className="w-[60px] h-[60px] rounded-[50px] bg-primary flex justify-center items-center cursor-pointer absolute -bottom-25 -translate-x-2/4 right-[40%]  z-999"
        onClick={onClick}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5373 7.02553L11.2731 44.5183C11.2818 44.8979 11.3938 45.2679 11.5971 45.5886C11.8004 45.9092 12.0873 46.1684 12.4269 46.3381C12.7665 46.5078 13.146 46.5817 13.5245 46.5518C13.903 46.5219 14.2662 46.3894 14.5749 46.1684L41.2851 26.8906C42.3926 26.0916 42.3558 24.2211 41.2179 23.4642L13.7718 5.24922C13.4552 5.03836 13.0869 4.91829 12.7069 4.90206C12.3269 4.88583 11.9496 4.97406 11.6162 5.15716C11.2828 5.34025 11.006 5.61122 10.8158 5.94062C10.6255 6.27002 10.5292 6.64524 10.5373 7.02553Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props: onClickType) {
    const { onClick } = props;
    return (
      <div
        className="w-[60px] h-[60px] rounded-[50px] bg-primary flex justify-center items-center cursor-pointer absolute -bottom-25 -translate-x-2/4 left-[45%]  z-999"
        onClick={onClick}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.6612 43.7685L39.5944 6.26854C39.5925 5.88887 39.4872 5.5169 39.2896 5.19267C39.0921 4.86844 38.8098 4.60422 38.4733 4.42846C38.1368 4.25269 37.7587 4.17204 37.3797 4.19518C37.0007 4.21832 36.6352 4.34437 36.3226 4.55978L9.27271 23.358C8.15118 24.1371 8.15451 26.0079 9.27881 26.7851L36.3955 45.4868C36.7083 45.7033 37.0744 45.8299 37.4541 45.8529C37.8337 45.8759 38.2125 45.7944 38.5491 45.6173C38.8857 45.4402 39.1674 45.1742 39.3634 44.8482C39.5595 44.5223 39.6625 44.1488 39.6612 43.7685Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }

  //==========

  return (
    <section className="mt-[93px]">
      <Container>
        <Title
          mainTitle="কেন আমরাই সেরা"
          subTitle="কেন আপনি আমাদের লার্নার হবেন"
        />
        <div className="mt-[62px]">
          <Slider {...settings}>
            {qualityList.map((item) => (
              <Quality_Card item={item} />
            ))}
          </Slider>
        </div>
        
        <div className="mb-[118px] mt-[186px]">
          <Flex className="gap-[35px]">
            <div className="w-full">
              <Image imgurl={classImg} alt="classimg" />
            </div>

            <div className="w-full">
              <h2 className="text-4xl text-black font-anek font-bold mb-8">
                আমাদের ক্লাসের বিশেষত্ব
              </h2>

              {classList.map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                  className="text-2xl text-black font-anek font-medium mb-6 ml-12"
                />
              ))}
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Quality;
