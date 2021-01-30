import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
    }

    a{
        text-decoration:none;
    }

    a:visited{
        color:blue;
    }

    .col-12{
        width:100%;
    }

    .px-15{
        padding: 0 15px;
    }

    @media screen and (min-width: 576px) {  
        .col-sm-12{
            width:100%;
        }
    }
     
    @media screen and (min-width: 768px) {  
        .col-md-4{
            width:100%;
        }
    }
     
    @media screen and (min-width: 992px) { 
        .col-lg-3{
            width:100%;
        }
    }
     
    @media screen and (min-width: 1200px) {  

    }
`;


export default GlobalStyle;