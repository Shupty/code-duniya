import Container from "../common/Container";
import { Button } from "../ui/Button";

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

      </Container>
    </footer>
  );
};

export default Footer;
