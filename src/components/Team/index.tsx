import React from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import SectionTitle from "../Common/SectionTitle";
import langData from '../../langs/data.json';
import { useLangContext } from "@/context/languageContext";

const Team: React.FC = () => {
  const { langs, lang, setLang } = useLangContext();
  const teamMembers = [
    {
      name: "Attila KAMAN",
      job: "Managing Director",
      img: "https://kw-manufacturing.com/wp-content/uploads/2021/09/Attila-KAMAN.jpg",
    },
    {
      name: "Meriem ATTIA",
      job: "Product Manager",
      img: "https://kw-manufacturing.com/wp-content/uploads/2021/09/Meriem-ATTIA.jpg",
    },

    {
      name: "Sabrine CHELBI",
      job: "HR Manager",
      img: "https://kw-manufacturing.com/wp-content/uploads/2021/09/Sabrine-CHELBI-1.jpg",
    }
  ];

  return (
    <div className="bg-inherit pb-8">
    <div id="team" className="container">
      {/* <Row justify="center">
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]" style={{ padding: "1rem" }}>
          Team
        </h2>
      </Row>
      <Row justify="center">
        <p className="pr-[32px] text-lg font-medium leading-relaxed text-body-color">
          United in Purpose, Stronger as One: Meet Our Team
        </p>
        
      </Row> */}
      <div className="flex justify-center">
        <SectionTitle
          title={langData[lang].team_t0}
          paragraph={langData[lang].team_d0}
          center
        />
      </div>


      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "1rem" }}>
        {teamMembers.map((value, idx) => (
          <Col key={idx} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={value.name} src={value.img} />}
            >
              <Meta title={value.name} description={value.job} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  );
};

export default Team;
