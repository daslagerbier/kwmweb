"use client";
import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "800px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Gallery = () => {
  return (
    <Carousel
      autoplay
      arrows infinite={true}
    >
      <div>
        <img
          className="h-screen w-screen object-cover"
          src="/images/gallery/021.jpg"
          alt="Image"
        />
      </div>
      <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/003.jpg"
          alt="Image"
        />
      </div>
      {/* <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/004.jpg"
          alt="Image"
        />
      </div> */}
      <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/016.jpg"
          alt="Image"
        />
      </div>
      {/* <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/019.jpg"
          alt="Image"
        />
      </div> */}
      <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/020.jpg"
          alt="Image"
        />
      </div>
      <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/025.jpg"
          alt="Image"
        />
      </div>
      <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/026.jpg"
          alt="Image"
        />
      </div>
    </Carousel>
  );
};

export default Gallery;
