// import React from "react";
// import langData from '../../langs/data.json';
// import { useLangContext } from "@/context/languageContext";
// function VisionSection() {
//   const { langs, lang } = useLangContext();
//   return (
//     <div
//       id="vision"
//       style={{
//         backgroundColor: "#EBEBEB",
//         padding: "20px",
//         marginTop: "-60px",
//       }}
//     >
      
//       <p
//         style={{
//           paddingTop: "100px",
//           margin: "20px",
//           color: "#C8001E",
//           fontSize: "32px",
//           fontFamily: "Kanit",
//           fontStyle: "normal",
//         }}
//       >
//         {langData[lang].vision_section_1}
//       </p>
//     </div>
//   );
// }

// export default VisionSection;
import React from "react";
import langData from '../../langs/data.json';
import { useLangContext } from "@/context/languageContext";
import './VisionSection.css';

function VisionSection() {
  const { langs, lang } = useLangContext();
  return (
    <div id="vision">
      <p className="vision-text">
        {langData[lang].vision_section_1}
      </p>
    </div>
  );
}

export default VisionSection;
