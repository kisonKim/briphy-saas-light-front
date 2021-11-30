import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    
    ${reset};
    /* 스크롤 부드럽게 이동 */
    html {scroll-behavior: smooth;}
    
    a{
        text-decoration:none !important;
        color:inherit !important;
    }
    *{
        box-sizing:border-box;
    }
    body {
        color: #111111;
        font-family : "Noto Sans KR", sans-serif;
        font-size: 16px;
        overflow-x: hidden;
    } 
    
    ::-webkit-scrollbar {
      position:absolute;
      top:0;
      right:0;
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      // border-radius: 10px;
      background-color: lightgrey;
    }
    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
`;

export default globalStyles;