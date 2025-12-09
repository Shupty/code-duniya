import Container from "../common/Container";
import Flex from "../ui/Flex";
import Image from "../ui/Image";
import bannerImage from "../../assets/images/banner.png";
import { Button } from "../ui/Button";

const Banner = () => {
  return (
    <section className="bg-primary pt-[81px] pb-[173px]">
      <Container>
        <Flex>
          <div className="w-2/4">
            <h1 className="text-[50px] max-w-[435px] font-bold text-white font-anek">
              দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম{" "}
            </h1>
            <p className="mt-[45px] text-xl font-normal font-anek text-white max-w-[457px]">
              আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি
              এক্সপার্ট হিসেবে গড়ে তুলুন
            </p>
            <Button
              className="mt-[41px] font-anek font-semibold text-2xl text-white bg-secondary py-[11px] px-[58px] rounded-[10px]"
              title="কোর্স দেখুন"
            />
          </div>
          <div className="w-2/4">
            <Image imgurl={bannerImage} alt="bannerImage" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
