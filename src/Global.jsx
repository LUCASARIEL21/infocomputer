import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        max-width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Times New Roman', Times, serif !important;
    }

    body {
        background-color: #c5c5c5;
    }
`;

export default GlobalStyle;