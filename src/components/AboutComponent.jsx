import React from "react";

const AboutComponent = ({headline,Icon,content}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] p-4  rounded shadow-[0_2px_10px_rgba(233,200,130,0.2)] border-l-4 border-[rgba(0,132,75,1)] w-full">
      <div className="flex items-center gap-2">
        <Icon size={22} color="rgba(0,132,75,1)" />
        <p className="font-semibold text-xl text-[rgba(233,200,130,1)]">
        {headline}
        </p>
      </div>

      <div>
        <p className="text-white leading-relaxed">
        {content}
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
