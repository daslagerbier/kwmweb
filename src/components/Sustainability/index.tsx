//  "use client"
// import { useState } from 'react';
// import { Modal } from 'antd';

// const Sustainability = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [hoveredText, setHoveredText] = useState('');
//   const [overlayContent, setOverlayContent] = useState('');

//   const [classImg1,setClassImg1] =useState("sustainability-img1")

//   const showModal = (content) => {
//     setIsModalVisible(true);
//     setOverlayContent(content);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     setHoveredText('');
//   };

//   const getOverlayContent = (txt) => {
//     switch (txt) {
//       case 'Text 1':
//         return 'Content for Text 1';
//       case 'Text 2':
//         return 'Content for Text 2';
//       case 'Text 3':
//         return 'Content for Text 3';
//       case 'Text 4':
//         return 'Content for Text 4';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div id='sustainability' className={"relative w-full h-auto sustainability "+classImg1 } >

//       <div className="absolute bottom-0 left-0 p-8">
//       <div className="grid gap-4">
//         <div
//           className="relative cursor-pointer text-white text-6xl font-bold transition duration-300 hover:text-red-500"
//           onMouseEnter={() => 
//             setClassImg1("sustainability-img2") 
//            }
//            onMouseLeave={() => 
//             setClassImg1("sustainability-img1") 
//            }

//           onClick={() => showModal(getOverlayContent('Text 1'))}
//           style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
//         >
//           CARBON FOOTPRINT REDUCTION
//         </div>
//         <div
//           className="relative cursor-pointer text-white text-6xl font-bold transition duration-300 hover:text-red-500"
//           onMouseEnter={() => 
//             setClassImg1("sustainability-img3") 
//            }
//            onMouseLeave={() => 
//             setClassImg1("sustainability-img1") 
//            }
//           onClick={() => showModal(getOverlayContent('Text 2'))}
//           style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
//         >
//           WASTE REDUCTION
//         </div>
//         <div
//           className="relative cursor-pointer text-white text-6xl font-bold transition duration-300 hover:text-red-500"
//           onMouseEnter={() => 
//             setClassImg1("sustainability-img4") 
//            }
//            onMouseLeave={() => 
//             setClassImg1("sustainability-img1") 
//            }
//           onClick={() => showModal(getOverlayContent('Text 3'))}
//           style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
//         >
//           ECO FRIENDLY MATERIALS
//         </div>
//         <div
//           className="relative cursor-pointer text-white text-6xl font-bold transition duration-300 hover:text-red-500"
//            onMouseEnter={() => 
//             setClassImg1("sustainability-img5") 
//            }
//            onMouseLeave={() => 
//             setClassImg1("sustainability-img1") 
//            }
          

//           onClick={() => showModal(getOverlayContent('Text 4'))}
//           style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
//         >
//           ETHICAL MANUFACTURING
//         </div>
//         </div>
//       </div>
//       <Modal
//         width={"50vw"}
//         title={hoveredText}
//         open={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//         centered
//   style={{ borderRadius: 0, position: 'fixed', right: "0", zIndex: 9999, width:"50vw"}}
//       >
//         <div style={{height:"95vh",width:"50vw"}}> 
//         {overlayContent}
//         </div>
        

//       </Modal>
//     </div>
//   );
// };

// export default Sustainability;
"use client";
import { useState } from 'react';
import { Modal } from 'antd';

const Sustainability = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hoveredText, setHoveredText] = useState('');
  const [overlayContent, setOverlayContent] = useState('');

  const [classImg1, setClassImg1] = useState("sustainability-img1");

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
    <div id='sustainability' className={`relative w-full h-auto sustainability ${classImg1}`}>

      <div className="absolute bottom-0 left-0 p-4 md:p-8">
        <div className="grid gap-4">
          <div
            className="relative cursor-pointer text-white text-2xl sm:text-4xl md:text-6xl font-bold transition duration-300 hover:text-red-500"
            onMouseEnter={() => setClassImg1("sustainability-img2")}
            onMouseLeave={() => setClassImg1("sustainability-img1")}
            onClick={() => showModal(getOverlayContent('Text 1'))}
            style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
          >
            CARBON FOOTPRINT REDUCTION
          </div>
          <div
            className="relative cursor-pointer text-white text-2xl sm:text-4xl md:text-6xl font-bold transition duration-300 hover:text-red-500"
            onMouseEnter={() => setClassImg1("sustainability-img3")}
            onMouseLeave={() => setClassImg1("sustainability-img1")}
            onClick={() => showModal(getOverlayContent('Text 2'))}
            style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
          >
            WASTE REDUCTION
          </div>
          <div
            className="relative cursor-pointer text-white text-2xl sm:text-4xl md:text-6xl font-bold transition duration-300 hover:text-red-500"
            onMouseEnter={() => setClassImg1("sustainability-img4")}
            onMouseLeave={() => setClassImg1("sustainability-img1")}
            onClick={() => showModal(getOverlayContent('Text 3'))}
            style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
          >
            ECO FRIENDLY MATERIALS
          </div>
          <div
            className="relative cursor-pointer text-white text-2xl sm:text-4xl md:text-6xl font-bold transition duration-300 hover:text-red-500"
            onMouseEnter={() => setClassImg1("sustainability-img5")}
            onMouseLeave={() => setClassImg1("sustainability-img1")}
            onClick={() => showModal(getOverlayContent('Text 4'))}
            style={{ fontFamily: 'Inknut Antiqua, serif', fontWeight: 300 }}
          >
            ETHICAL MANUFACTURING
          </div>
        </div>
      </div>
      <Modal
        width={"90vw"}
        title={hoveredText}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        style={{ borderRadius: 0, zIndex: 9999, width: "90vw", maxWidth: "600px" }}
      >
        <div style={{ height: "70vh", width: "100%" }}>
          {overlayContent}
        </div>
      </Modal>
    </div>
  );
};

export default Sustainability;
