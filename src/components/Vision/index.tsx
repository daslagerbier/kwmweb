import { Select } from "antd";
import React from "react";
import langData from '../../langs/data.json';
function VisionSection({ lang,  langs, setLang }) {
  return (
    <div
      id="vision"
      style={{
        backgroundColor: "#EBEBEB",
        padding: "20px",
        marginTop: "-60px",
      }}
    >
      <Select
        defaultValue={lang}
        style={{ width: 120 }}
        onChange={(e) => setLang(e)}
        options={langs.map((lang) => ({
          value: lang,
          name: lang,
        }))}
      />
      <p
        style={{
          paddingTop: "100px",
          margin: "20px",
          color: "#C8001E",
          fontSize: "32px",
          fontFamily: "Kanit",
          fontStyle: "normal",
        }}
      >
        {langData[lang].vision_section_1}
      </p>
      <p
        style={{
          paddingTop: "40px",
          margin: "20px",
          color: "#C8001E",
          fontSize: "32px",
          fontFamily: "Kanit",
          fontStyle: "normal",
        }}
      >
        At K.W Manufacturing, our mission is to foster a motivating,
        socio-economically conscious, and respectful work environment for all
        team members involved in our production lines. Our core values of
        expertise, precision, efficiency, and adherence to deadlines drive every
        aspect of our operations.
      </p>
    </div>
  );
}

export default VisionSection;
