import React from "react";

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="bg-[#EEEFEF] rounded-[20px] px-[21px] py-[20px] hover:bg-opacity-[0.8] transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-[10.68px] mb-[8.21px]">
        <img src={icon} alt={title} />
        <h2 className="text-[18px] font-[500] font-jost">{title}</h2>
      </div>
      <p className="text-[#797B80]">{description}</p>
    </div>
  );
};

export default FeatureCard;
