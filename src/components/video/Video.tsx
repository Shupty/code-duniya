import Container from "../common/Container";
import Title from "../ui/Title";
import videoImg from "../../assets/images/video.png"
import VideoItem from "./VideoItem";
import { Button } from "../ui/Button";

const Video = () => {
 const videoList = [
    {
      id: 1,
      src: videoImg,
    },
    {
      id: 2,
      src: videoImg,
    },
    {
      id: 3,
      src: videoImg,
    },
    {
      id: 4,
      src: videoImg,
    },
  ];

  return (
    <section>
      <Container>
        <Title
          mainTitle="আমাদের সফলতার গল্পগুলো"
          subTitle="আমাদের হাতে তৈরি হওয়া প্রতিটি নক্ষত্র"
        />
        <div className="grid grid-cols-2 gap-6 mb-5 mt-[90px]">
          {videoList.map((item) => (
            <VideoItem item={item} key={item.id} />
          ))}
        </div>
         <Button
          title="আরও দেখুন"
          className="block mx-auto mt-11 font-anek font-semibold text-2xl text-white bg-secondary py-[11px] px-[58px] rounded-[10px] mb-[90px]"
        />
      </Container>
    </section>
  );
};

export default Video;
