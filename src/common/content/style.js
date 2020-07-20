import styled from 'styled-components';

export const Pic = styled.div`
  position:relative;
//  overflow:hidden;
  width:100%;
  .eachPic {
    width:200px;
    padding-right:15px;
    padding-bottom:10px;
    position:absolute;
    border-radius:16px;
    box-sizing:border-box;
    img {
      border-radius:16px;
      width:100%;
      height:100%;
      object-fit:cover;
    }
  }
`;

export const Container = styled.div`
  width:100%;
  paddint-left:15px;
  padding;right:15px;
`;