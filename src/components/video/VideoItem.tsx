import Image from "../ui/Image";
type videoType = {
  id: number;
  src: string;
};

const VideoItem = ({item}: { item: videoType }) => {
  return (
     <div key={item.id}>
      <Image imgurl={item.src} alt="videoimg" />
    </div>
  )
}

export default VideoItem