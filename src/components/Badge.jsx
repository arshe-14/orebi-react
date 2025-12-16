import React from "react";

const Badge = ({ badgeText, className }) => {
  if (!badgeText) return null;
  return (
    <div
      className={`w-[92px] bg-[#262626] py-[9px] px-[31px] text-[14px] font-bold font-dmFont text-white ${className}`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
