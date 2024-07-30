// import React from 'react';
// import { Typography } from 'antd';
// import SectionTitle from '../Common/SectionTitle';
// import Image from 'next/image';

// const { Title, Paragraph } = Typography;


// const Overlay = (props) => {
  
//   return (
//     <div >
//       <SectionTitle title={props.title} paragraph="lorem ipsum" />
//       <Image
//         src="/images/frame 7.png"
//         alt="Image"
//         width={720}
//         height={480}
//       />
//     </div> 
//   );
// };

// export default Overlay;



import React from 'react';
import { Typography } from 'antd';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

const Overlay = (props) => {
  return (
    <div>
      <div className='overlaysection'> 
      <SectionTitle title={props.title} paragraph={props.paragraph} />
      </div>
      {/* <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src="/images/frame 7.png"
          alt="Image"
          layout="responsive"
          width={3}
          height={2}
          style={{ width: '100%', height: 'auto' }}
        />
      </div> */}
    </div>
  );
};

export default Overlay;
