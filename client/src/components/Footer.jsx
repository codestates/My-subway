import React from 'react';
import styled from 'styled-components';

// const FooterStyle = styled.div`
//   padding: 0 0 1.1rem 0;
//   background: #f3f4f4;
//   /* #f3f4f4; */
//   text-align: center;
//   vertical-align: middle;
//   /* position: ab; */
//   /* bottom: 0; */
//   width: 100vw;
//   height: 10%;
//   margin-top: 50.5%;
//   color: #787878;
// `;

// const ImageStyle = styled.img`
//   width: 65px;
//   height: 65px;
//   color: #787878;
//   margin: 1rem 1.5rem 0.5rem 0;
// `;

// function Footer() {
//   return (
//     <FooterStyle>
//       <div>
//         <div>
//           <ImageStyle src="../imageFile/김병민.png" alt="" />

//           <ImageStyle src="../imageFile/박상현.png" alt="" />

//           <ImageStyle src="../imageFile/김상훈.png" alt="" />
//         </div>
//         <p style={{ marginLeft: '-30px', marginBottom: '0px' }}>&copy; Copyright 2021 Team SMS</p>
//       </div>
//     </FooterStyle>
//   );
// }

// export default Footer;

const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 0 1rem 0;
  background: #f3f4f4;
  /* #f3f4f4; */
  text-align: center;
  vertical-align: middle;
  /* position: ab; */
  bottom: 0;
  width: 100vw;
  position: fixed;
  color: #787878;
`;

const ImageStyle = styled.img`
  width: 65px;
  height: 65px;
  color: #787878;
  margin: 1rem 1.5rem 0 0;
`;

function Footer() {
  return (
    <FooterStyle>
      <p style={{ marginLeft: '-30px', marginBottom: '0px', marginTop: '20px' }}>
        <span style={{ fontFamily: 'Sans' }}>&copy;</span> Copyright 2021 Team SMS
      </p>
      <div>
        <a href="https://github.com/byungmin12" target="_blank">
          <ImageStyle src="../imageFile/김병민.png" alt="" />
        </a>

        <a href="https://github.com/shpk93" target="_blank">
          <ImageStyle src="../imageFile/박상현.png" alt="" />
        </a>

        <a href="https://github.com/HunKimADev" target="_blank">
          <ImageStyle src="../imageFile/김상훈.png" alt="" />
        </a>
      </div>
    </FooterStyle>
  );
}

export default Footer;
