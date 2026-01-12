import Container from "../common/Container";
import { Button } from "../ui/Button";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container>
        
            <div className="text-center">
          <h2 className="py-4 text-[80px] text-white font-anek font-bold mb-3">
            ভর্তি চলছে
          </h2>
          <p className="text-[20px] font-anek text-white font-bold mb-6">
            আমাদের অনলাইন অথবা অফলাইন কোর্সে এনরোল করে ফেলুন
          </p>

          <div className="flex gap-6 justify-center pb-[118px]">
            <Button
              title="সকল কোর্স দেখুন"
              className="border border-white py-2.5 px-15 rounded-[15px] text-white font-anek text-[20px] font-bold"
            />
            <Button
              title="আমাদের সেমিনারে যোগ দিন"
              className="border border-white py-2.5 px-[15px] rounded-[15px] text-white font-anek text-[20px] font-bold"
            />
          </div>
        </div>

<div className="text-center text-white font-anek">
          <h1 className="font-bold text-4xl lg:text-[80px] mb-4">কোড দুনিয়া</h1>
          <h5 className="font-normal text-2xl lg:text-4xl">
            দেশের সর্ববৃহৎ আইটি ট্রেনিং প্লাটফর্ম
          </h5>
          <ul className="flex justify-center gap-6 text-3xl lg:text-[40px] mt-7">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSquareYoutube />
              </a>
            </li>
          </ul>
        </div>

              <div className="flex justify-between text-white font-anek text-[12px] lg:text-[20px] font-normal mt-6 lg:mt-[131px]">
          <p>২০২৪ কপিরাইট | মাহমুদ হাসান রামীম | সর্বসত্ত্ব সংরক্ষিত</p>
          <p>প্রাইভেসি পলিসি</p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
