import ImageFrame from "./ImageFrame"
import listing1 from "@/assets/images/listing1.png"
import listing2 from "@/assets/images/listing2.png"
import listing3 from "@/assets/images/listing3.png"

const ImageRoll = () => {
  return (
    <div className="flex gap-4 justify-around container mx-auto px-4 font-euclid-circular-b">

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
    </div>
 
  )
}
export default ImageRoll