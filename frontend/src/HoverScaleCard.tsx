import React from "react";

interface HoverScaleCardProps {
  title: string;
  content: string;
}

const HoverScaleCardProps: React.FC<HoverScaleCardProps> = ({
  title,
  content,
}) => (
  <div className="card bg-base-200 shadow-xl p-6 transition-transform duration-300 ease-in-out hover:shadow-2xl">
    <h2 className="" text-2xl font-bold mb-2>
      {" "}
      {title}
    </h2>
    <p>{content}</p>
  </div>
);
export default HoverScaleCardProps;
