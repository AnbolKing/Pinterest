import styled from 'styled-components';

export const Pic = styled.div`
  position:relative;
  width:100%;
  .eachPic {
    width:200px;
    height:100%;
    padding-right:15px;
    padding-bottom:10px;
    display:block;
    position:absolute;
    border-radius:16px;
    box-sizing:border-box;
//    background-color: rgb(134, 103, 79);
    img {
      border-radius:16px;
      width:100%;
      object-fit:cover;
    }
  }
`;

export const Container = styled.div`
  margin:0 auto;
`;