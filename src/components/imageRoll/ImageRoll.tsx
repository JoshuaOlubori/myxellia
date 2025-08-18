import ImageFrame from "./ImageFrame";
import listing1 from "@/assets/images/listing1.png";
import listing2 from "@/assets/images/listing2.png";
import listing3 from "@/assets/images/listing3.png";
import chatbot from "@/assets/icons/chatbot.svg";

const ImageRoll = () => {
  return (
    <div className="font-euclid-circular-b relative container mx-auto mb-8 flex max-w-[1400px] justify-around gap-4 px-4">
      <ImageFrame
        imgSrc={listing1}
        title="MOST CLICKED"
        subtitle="Urban Prime Plaza Premiere"
        circleCount={2}
      />

      <ImageFrame
        imgSrc={listing2}
        title="MOST WATCHLISTED"
        subtitle="Urban Prime Plaza Premiere"
        circleCount={5}
      />

      <ImageFrame
        imgSrc={listing3}
        title="HOTTEST LISTING"
        subtitle="Urban Prime Plaza Premiere"
        circleCount={5}
      />

      <div className="absolute top-5 right-3 rounded-full bg-[#242526] p-5">
        <img src={chatbot} alt="" className="" />
      </div>
    </div>
  );
};
export default ImageRoll;
