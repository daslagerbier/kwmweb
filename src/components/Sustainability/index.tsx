// "use client";
import { useState } from 'react';
import { Modal } from 'antd';
import langData from '../../langs/data.json';
import { useLangContext } from '@/context/languageContext';
import Overlay from './overlay';

const Sustainability = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hoveredText, setHoveredText] = useState('');
  const [overlayContent, setOverlayContent] = useState('');
  const [classImg1, setClassImg1] = useState("sustainability-img1");

  // Function to show the modal with specific content
  const showModal = (content) => {
    setIsModalVisible(true);
    setOverlayContent(content);
  };

  // Function to hide the modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setHoveredText('');
  };

  // Function to get overlay content based on text
  const getOverlayContent = (txt) => {
    switch (txt) {
      case 'Text 1':
        return <Overlay title = {langData[lang].sustainability_t1} paragraph = {langData[lang].sustainability_p1}/> ;
      case 'Text 2':
        return <Overlay title = {langData[lang].sustainability_t2} paragraph = {langData[lang].sustainability_p2}/> ;
      case 'Text 3':
        return <Overlay title = {langData[lang].sustainability_t3} paragraph = {langData[lang].sustainability_p3}/> ;
      case 'Text 4':
        return <Overlay title = {langData[lang].sustainability_t4} paragraph = {langData[lang].sustainability_p4}/> ;
      default:
        return '';
    }
  };

  // Language context from custom hook
  const { langs, lang, setLang } = useLangContext();

  return (
    <div id='sustainability' className={`relative w-full h-96 sustainability  ${classImg1}`}>

      <div className="absolute bottom-16 left-4 p-2 md:p-4 lg:p-4">
        <div className="grid gap-4">
          
          <div
            className="uppercase relative cursor-pointer text-white text-4xl sm:text-6xl md:text-7xl font-medium transition duration-300 hover:text-red-500"
        
            onMouseEnter={() => setClassImg1("sustainability-img2")}
            onMouseLeave={() => setClassImg1("sustainability-img1")}
            onClick={() => showModal(getOverlayContent('Text 1'))}
          >
            {langData[lang].sustainability_t1}
          </div>
          <div
            className="uppercase relative cursor-pointer text-white text-4xl sm:text-6xl md:text-7xl font-medium transition duration-300 hover:text-red-500"
          
            onMouseEnter={() => setClassImg1("sustainability-img3")}
            onMouseLeave={() => setClassImg1("sustainability-img1")}
            onClick={() => showModal(getOverlayContent('Text 2'))}
          >
            {langData[lang].sustainability_t2}
          </div>
          <div
            className="uppercase relative cursor-pointer text-white text-4xl sm:text-6xl md:text-7xl font-medium transition duration-300 hover:text-red-500"
           
            onMouseEnter={() => setClassImg1("sustainability-img4")}
            onMouseLeave={() => setClassImg1("sustainability-img1")}
            onClick={() => showModal(getOverlayContent('Text 3'))}
          >
            {langData[lang].sustainability_t3}
          </div>
          <div
            className="uppercase relative cursor-pointer text-white text-4xl sm:text-6xl md:text-7xl font-medium transition duration-300 hover:text-red-500"
        
            onMouseEnter={() => setClassImg1("sustainability-img5")}
            onMouseLeave={() => setClassImg1("sustainability-img1")}
            onClick={() => showModal(getOverlayContent('Text 4'))}
          >
            {langData[lang].sustainability_t4}
          </div>
        </div>
      </div>
      <Modal
        className="custom-modal  h-full mr-0 top-0 "
        title={hoveredText}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        
        
      >
        <div>
          {overlayContent}
        </div>
      </Modal>
    </div>
  );
};

export default Sustainability;
