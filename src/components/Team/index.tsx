import React from 'react';
import { Col, Row } from 'antd';

const Team: React.FC = () => (
  <>

    <Row>
      <Col span={2}></Col>
      <Col span={10}>Team
      <div className='h-full'> </div>
      </Col>
      <Col span={10}>Workforce</Col>
      <Col span={2}></Col>
    </Row>
  </>
);

export default Team;