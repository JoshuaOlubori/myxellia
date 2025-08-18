import ImageFrame from "./ImageFrame"
import listing1 from "@/assets/images/listing1.png"
import listing2 from "@/assets/images/listing2.png"
import listing3 from "@/assets/images/listing3.png"
import chatbot from "@/assets/icons/chatbot.svg";

const ImageRoll = () => {
  return (
    <div className="relative flex gap-4 justify-around container mx-auto px-4 font-euclid-circular-b">

 <ImageFrame
  imgSrc={listing1}
  title="MOST CLICKED"
  subtitle="Urban Prime Plaza Premiere"
  circleCount = {2}
  />

   <ImageFrame
  imgSrc={listing2}
  title="MOST WATCHLISTED"
  subtitle="Urban Prime Plaza Premiere"
  circleCount = {5}
  />

   <ImageFrame
  imgSrc={listing3}
  title="HOTTEST LISTING"
  subtitle="Urban Prime Plaza Premiere"
  circleCount = {5}
  />

  <div className="absolute bg-[#242526] rounded-full p-5 right-3 top-5">
    <img src={chatbot} alt="" className=""/>
  </div>
    </div>
 
  )
}
export default ImageRoll