"use client";
import React from "react";
import { Carousel } from "antd";
import Img1 from "/public/images/gallery/Img-1.jpg";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "800px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <img
          className="h-auto max-w-full"
          src="/images/gallery/Img-2.jpg"
          alt="Image"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full"
          src="/images/gallery/Img-3.jpg"
          alt="Image"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full"
          src="/images/gallery/Img-4.jpg"
          alt="Image"
        />
      </div>
    </Carousel>
  );
};

export default App;
