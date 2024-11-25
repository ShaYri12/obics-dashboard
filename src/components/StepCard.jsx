import React from "react";

const StepCard = ({ stepNumber, title, description, link, linkText }) => {
  return (
    <div className="text-center border rounded-[30px] border-[#EEEEEE] px-4 py-[20px]">
      {/* Step Number Circle */}
      <div className="md:w-[54.41px] w-[44px] md:h-[54.41px] h-[44px] bg-[#131A22] rounded-full flex items-center justify-center text-white md:text-[25px] text-[20px] font-[600] mx-auto md:mt-[-48px] mt-[-42px]">
        {stepNumber}
      </div>

      {/* Title */}
      <h2 className="md:text-[25px] text-[20px] font-[600] font-jost text-black mb-[8.5px] md:mt-[22px] mt-[15px]">
        {title}
      </h2>

      {/* Description Link */}
      <a href={link} className="text-[#797B80] hover:text-gray-900 underline">
        {description || linkText}
      </a>
    </div>
  );
};

export default StepCard;
