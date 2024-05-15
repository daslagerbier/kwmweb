import React from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

const Team: React.FC = () => {
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
      name: "Bianca SEGALA",
      job: "Quality Manager",
      img: "https://kw-manufacturing.com/wp-content/uploads/2021/09/Bianca-SEGALA.jpg",
    },
    {
      name: "Sabrine CHELBI",
      job: "RH Manager",
      img: "https://kw-manufacturing.com/wp-content/uploads/2021/09/Sabrine-CHELBI-1.jpg",
    }
  ];

  return (
    <div className="container">
      <Row style={{ justifyContent: "center" }}>
        {" "}
        <h2
          className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
          style={{ padding: "1rem" }}
        >
          Team
        </h2>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <p className="pr-[32px] text-lg font-medium leading-relaxed text-body-color">
        United in Purpose, Stronger as One: Meet Our Team
        </p>
      </Row>

      <div className="flex items-center justify-center space-x-5 mt-5" >
        {teamMembers.map((value, idx) => {
          return (
              <Card
                key={idx}
                hoverable
                style={{ width: 240 }}
                cover={<img alt={value.name} src={value.img} />}
              >
                <Meta title={value.name} description={value.job} />
              </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
