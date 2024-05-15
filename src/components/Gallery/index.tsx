"use client";
import React from "react";
import { Carousel, Button } from "antd";
import Img1 from "/public/images/gallery/Img-1.jpg";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "800px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const App: React.FC = () => {

  // const prevArrow = (
  //   <Button type="primary" shape="circle" icon={<LeftOutlined />} style={{fontSize:'60px', top: '50%', left: '20px', transform: 'translateY(-50%)' }}/>
  // );

  // const nextArrow = (
  //   <Button type="primary" shape="circle" icon={<RightOutlined />} style={{fontSize:'60px', top: '50%', right: '20px',transform: 'translateY(-50%)' }} />
  // );

  return (
    <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
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
      <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/004.jpg"
          alt="Image"
        />
      </div>
      <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/016.jpg"
          alt="Image"
        />
      </div>
      <div>
        <img
          className="h-screen w-screen object-cover"
          // className="max-h-800 max-w-full"
          src="/images/gallery/019.jpg"
          alt="Image"
        />
      </div>
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

export default App;
