import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width:100%;
  height:80px;
  margin-top:10px;
  margin-bottom:12px;
  display:flex;
  align-content:center;
  flex-direction:row;
  align-items:center;
`;

export const IconLogo = styled.div`
  width:48px;
  heiht:48px;
  font-size:12px;
  background-color: transparent;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  padding:4px 4px;
  margin-left:25px;
  cursor:pointer;
  .icon {
    color:rgb(230,0,35);
    fill(230,0,35);
    overflow:hidden;
    vertical-align:center;
    line-height:48px;
    .logoPath {
      color:rgb(230,0,35);
      fill(230,0,35);
    }
  }
`;

export const MainPage = styled.div`
  display:bolck;
  height:48px;
  min-width:65px;
  font-size:12px;
  cursor:pointer;
  .mainpage {
    display:flex;
    width:100%;
    height:100%;
    flex-direction:row;
    padding-left:16px;
    padding-right:16px;
    border-radius:24px;
    align-items:center;
    background:rgb(51,51,51);
    span {
      font-size:16px;
      text-align:center;
      justify-content:center;
      font-weight:700;
      color:rgb(255,255,255);
    }
  }
`;

export const Focus = styled.div`
  padding:0 16px;
  display:block;
  height:48px;
  min-width:60px;
  cursor:pointer;
  .focus {
    display:flex;
    align-items:center;
    height:100%;
    width:100%;
    .focusName {
      font-size:16px;
      text-align:center;
      justify-content:center;
      font-weight:600;
      color:#111;
    }
  }
`;
export const SearchInfo = styled.div`
  border-radius:5px;
  position:absolute;
  top:48px;
  width:100%;
  background:rgb(255,255,255);
  height:455px;
  padding-left:20px;
  z-index:10;
`;

export const SearchContent = styled.div`
  position:absolute;
  margin-top:30px;
  .title {
    font-size:15px;
    font-family:"微软雅黑"
  }
  .img-list {
    width:80%;
    height:120%;
    .img-content {
      display:inline-table
      width:13%;
      height:2%;
      border-radius:10px;
      overflow:hidden
      margin:10px;
      img {
        width:100%;
        height:100%
      }
    }
  }
`;

export const Search = styled.div`
  border-color:blue blue; 
  position:relative;
  min-width:407px;
  padding:0 8px;
  flex:1 1 auto;
  .searchContent {
    width:100%;
    height:48px;
    box-sizing:border-box;
    border-radius:24px;
    background-color:#efefef;
    .searchBar {
      display:flex;
      flex-direction:row;
      padding: 0 0 0 16px;
      height:100%;
      flex:1 1 auto;
      min-width:0;
      min-height:0;
      align-items:center;
      box-sizing:border-box;
      position:relative;
      width:100%;
      .iconLogo {
        margin-right:8px;
        .gUZ {
          color:#767676;
          display:block;
        }
      }
      .textContent {
        height:100%;
        min-width:0;
        min-height:0;
        input {
          width:100%;
          background-color:transparent;
          border:none;
          color:#333;
          font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,"ＭＳ Ｐゴシック",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
          font-size:16px;
          height:100%;
          outline:none;
          padding:0;
          width:100%;
          line-height:normal;
        }
      }
    }
  }
`;

export const SideIcon = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  box-sizing:border-box;
  .information {
    box-sizing:border-box;
    position:relative;
    .infoButton {
      display:block;
      border:none;
      padding:0px;
      cursor:pointer;
      background:transparent;
      outline:none;
      .infoIcon {
        position:relative;
        background:transparent;
        height:48px;
        width:48px;
        display:flex;
        padding:4px 4px;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .gUZ {
          display:block;
          color:#747474;
        }
        .infoTip {
          line-height:100%;
          border-radius:999px;
          position:absolute;
          right:5px;
          top:5px;
          box-sizing:border-box;
          padding:0 3px 0 2px;
          justify-content:center;
          align-items:center;
          height:18px;
          min-width:18px;
          background-color:#e60023;
          padding: 0 0 1px 1px;         
          display:block;         
          .infoText {
            position:absolute;
            line-height:100%;
            justify-content:center;
            text-align:center;
            font-weight:700;
            color:rgb(255,255,255);
            display:block;
            top:3px
            right:5px;
          }
        }
      }
    }
  .myself {
    background-color:red;
    box-sizing:border-box;
    position:relative;
    display:block;
    .selfIcon {
      width:24px;
      height:24px;
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      .selfImg {
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        img {
          max-width：100%;
          height:auto;
          object-fit:cover;
        }
      }
    }
  }
  .message {
    box-sizing:border-box;
    position:relative;
    .messButton {
      border:none;
      padding:0px;
      cursor:pointer;
      background:transparent;
      outline:none;
      display:block;
      .messIcon {
        position:relative;
        background:transparent;
        height:48px;
        width:48px;
        display:flex;
        padding:4px 4px;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .gUZ {
          display:block;
          color:#747474;
        }
      }
    }
  }
  .more {
    box-sizing:border-box;
    display:block;
    .moreButton {
      border:none;
      outline:none;
      background:transparent;
      padding:0;
      cursor:pointer;
      .moreIcon {
        width:24px;
        height:24px;
        display:flex;
        background:transparent;
        align-items:center;
        justify-content:center;
        .gUZ {
          color:#767676;
          display:block;
        }
      }
    }
  }
`;

export const Display = styled.div`
  position:fixed;
  width:10000px;
  height:100%;
  background:rgba(0,0,0,0.2);
  top:79px;
  z-index:9;
`;
