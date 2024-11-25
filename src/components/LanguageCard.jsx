import React from "react";

const LanguageCard = ({ icon, name, onClick }) => {
  return (
    <div
      className="flex items-center gap-[8px] bg-[#EEEFEF] rounded-[20px] px-[20px] py-[19px] hover:bg-opacity-[0.8] transition cursor-pointer"
      onClick={onClick}
    >
      <img src={icon} alt={name} className="w-[35.69px]" />
      <h2 className="text-[18px] font-[500] font-jost">{name}</h2>
    </div>
  );
};

export default LanguageCard;
