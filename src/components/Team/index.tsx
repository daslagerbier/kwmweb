import React from 'react';
import { Card, Col, Flex, Row } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import Meta from 'antd/es/card/Meta';
import SectionTitle from '../Common/SectionTitle';

const Team: React.FC = () => (
  
<div className='container' >


<Row style={{justifyContent:"center"}}>  <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"  style={{padding:"1rem"}}>
          Teams
        </h2></Row>

    <Row style={{alignItems:"stretch"}} gutter={[24, 16]} >


    <Col span={9} style={{marginTop: "1rem",}}> 
        <div style={{}}>

        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Workforce
        </h3>
        <p className="pr-[32px] text-lg font-medium leading-relaxed text-body-color">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
</p>
        </div></Col> 

      <Col span={12} style={{ alignContent:"center"}} offset={2}>
    
        <div>
      

  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>

  <Card style={{  margin: "1rem", }} loading={false}>
        <Meta
        style={{padding:"1rem"}}
          avatar={<Avatar shape="square" size={70} icon={<img  src='/images/team/teamPlaceHolder.webp' />} />}
          title="Employe 1 "
          description="this a very good worker "
        />
      </Card>

      <Card style={{  margin: "1rem", }} loading={false}>
        <Meta
        style={{padding:"1rem"}}
          avatar={<Avatar shape="square" size={70} icon={<img  src='/images/team/teamPlaceHolder.webp' />} />}
          title="Employe 1 "
          description="this a very good worker "
        />
      </Card>

      <Card style={{  margin: "1rem", }} loading={false}>
        <Meta
        style={{padding:"1rem"}}
          avatar={<Avatar shape="square" size={70} icon={<img  src='/images/team/teamPlaceHolder.webp' />} />}
          title="Employe 1 "
          description="this a very good worker "
        />
      </Card>
      <Card style={{  margin: "1rem", }} loading={false}>
        <Meta
        style={{padding:"1rem"}}
          avatar={<Avatar shape="square" size={70} icon={<img  src='/images/team/teamPlaceHolder.webp' />} />}
          title="Employe 1 "
          description="this a very good worker "
        />
      </Card>

      <Card style={{  margin: "1rem", }} loading={false}>
        <Meta
        style={{padding:"1rem"}}
          avatar={<Avatar shape="square" size={70} icon={<img  src='/images/team/teamPlaceHolder.webp' />} />}
          title="Employe 1 "
          description="this a very good worker "
        />
      </Card>

      </div>
   

      
        </div>
   
      </Col>
 
   
    </Row>

    </div>

);

export default Team;