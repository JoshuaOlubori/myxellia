import React from "react";

interface ImageFrameProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  circleCount: number;
}

const ImageFrame: React.FC<ImageFrameProps> = ({
  imgSrc,
  title,
  subtitle,
  circleCount,
}) => {
  const circles = Array.from({ length: circleCount }, (_, index) => (
    <div
      key={index}
      className={`size-1.5 rounded-full mx-1 ${
        index === 0 ? "bg-white" : "bg-gray-300"
      }`}
    ></div>
  ));

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md max-w-sm">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-auto block"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="text-[14px] mb-1 font-medium ">{title}</p>
        <h3 className="text-[18px] font-semibold mb-2">{subtitle}</h3>
        {/* The fix is here */}
        <div className="flex justify-center items-center">{circles}</div>
      </div>
    </div>
  );
};

export default ImageFrame;