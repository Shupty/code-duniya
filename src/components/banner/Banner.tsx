import Container from "../common/Container";
import Flex from "../ui/Flex";
import Image from "../ui/Image";
import bannerImage from "../../assets/images/banner.png";
import { Button } from "../ui/Button";

const Banner = () => {
  return (
    <section className="bg-primary pt-10 lg:pt-20 pb-[173px]">
      <Container>
        <Flex className="gap-6 lg:gap-0 flex-col lg:flex-row">
          <div className="lg:w-2/4 w-full">
            <h1 className="lg:text-[50px] text-3xl max-w-[435px] font-bold text-white font-anek">
              দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম{" "}
            </h1>
            <p className="lg:mt-[45px] mt-6 lg:text-xl text-lg font-normal font-anek text-white max-w-[457px]">
              আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি
              এক্সপার্ট হিসেবে গড়ে তুলুন
            </p>
            <Button
              className="lg:mt-[41px] mt-6 font-anek font-semibold text-xl lg:text-2xl text-white bg-secondary py-[11px] px-5 lg:px-[58px] rounded-[10px]"
              title="কোর্স দেখুন"
            />
          </div>
          <div className="w-full lg:w-2/4">
            <Image imgurl={bannerImage} alt="bannerImage" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
