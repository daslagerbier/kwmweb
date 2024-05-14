import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const OverlayOne = () => {
  return (
    <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Title level={2} className="text-3xl mb-4 text-center">
          Section Title
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Paragraph className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              at ultrices purus. Vivamus tempus lectus id risus pharetra, at
              molestie urna volutpat.
            </Paragraph>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/frame 7.png"
              alt="Image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayOne;
