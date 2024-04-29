 "use client"
// import React from 'react';
// import { Typography, Flex, Row, Space } from 'antd';
// import Title from 'antd/es/typography/Title';

// const Sustainability: React.FC = () => (
//   <>
//   <div style={{ backgroundImage: "url(/images/gallery/Img-2.jpg)", paddingTop:300}}>
//       <Flex vertical justify='flex-end' align='flex-start' >

//         <h1 style={{fontSize: '8vw'}}>Text placeholder</h1>
//         <h1 style={{fontSize: '8vw'}}>Text placeholder</h1>
//         <h1 style={{fontSize: '8vw'}}>Text placeholder</h1>
//         <h1 style={{fontSize: '8vw'}}>Text placeholder</h1>

        
        
//         </Flex>
//         </div>
//   </>
// );

// export default Sustainability;
import { useState } from 'react';
import { Modal } from 'antd';

const Sustainability = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hoveredText, setHoveredText] = useState('');
  const [overlayContent, setOverlayContent] = useState('');

  const showModal = (content) => {
    setIsModalVisible(true);
    setOverlayContent(content);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setHoveredText('');
  };

  const getOverlayContent = (txt) => {
    switch (txt) {
      case 'Text 1':
        return 'Content for Text 1';
      case 'Text 2':
        return 'Content for Text 2';
      case 'Text 3':
        return 'Content for Text 3';
      case 'Text 4':
        return 'Content for Text 4';
      default:
        return '';
    }
  };

  return (
    <div id='sustainability' className="relative w-full h-auto">
      <img
        className="w-full h-auto object-cover"
        src="/images/gallery/Img-2.jpg"
        alt="Background"
      />
      <div className="absolute bottom-0 left-0 p-8">
      <div className="grid gap-4">
        <div
          className="relative cursor-pointer text-white text-6xl font-bold transition duration-300 hover:text-red-500"
          onMouseEnter={() => setHoveredText('Text 1')}
          onMouseLeave={() => setHoveredText('')}
          onClick={() => showModal(getOverlayContent('Text 1'))}
          style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
        >
          CARBON FOOTPRINT REDUCTION
        </div>
        <div
          className="relative cursor-pointer text-white text-6xl font-bold transition duration-300 hover:text-red-500"
          onMouseEnter={() => setHoveredText('Text 2')}
          onMouseLeave={() => setHoveredText('')}
          onClick={() => showModal(getOverlayContent('Text 2'))}
          style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
        >
          WASTE REDUCTION
        </div>
        <div
          className="relative cursor-pointer text-white text-6xl font-bold transition duration-300 hover:text-red-500"
          onMouseEnter={() => setHoveredText('Text 3')}
          onMouseLeave={() => setHoveredText('')}
          onClick={() => showModal(getOverlayContent('Text 3'))}
          style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
        >
          ECO FRIENDLY MATERIALS
        </div>
        <div
          className="relative cursor-pointer text-white text-6xl font-bold transition duration-300 hover:text-red-500"
          onMouseEnter={() => setHoveredText('Text 3')}
          onMouseLeave={() => setHoveredText('')}
          onClick={() => showModal(getOverlayContent('Text 4'))}
          style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
        >
          ETHICAL MANUFACTURING
        </div>
        </div>
      </div>
      <Modal
        title={hoveredText}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
  style={{ borderRadius: 0, position: 'fixed', top: 0, right: 0, zIndex: 9999 }}
      >
        {overlayContent}
        {/* You can add whatever content you want for the overlay */}
      </Modal>
    </div>
  );
};

export default Sustainability;
