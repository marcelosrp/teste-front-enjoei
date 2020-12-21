import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --border-header-color: #F1EEEC;
    --border-input: #F1EEEC;
    --border-input-error: red;
    --bgcolor-button-filtro: #f05b78;
    --color-current-price: #f05b78;
    --color-original-price: #222222;
    --bgcolor-discount: #f05b78;
    --color-discount: #fff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  button, input {
    &:focus {
      outline: none;
    }
  }

  .main {
    min-height: 100vh;
    width: 100%;
  }

  .filtro {
    align-items:center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px 10px;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;

     @media (max-width: 700px) {
       padding: 15px;
     }
  }

  .wrapperProducts {
    align-items:center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
    padding-bottom: 20px;
  }
`;

export default GlobalStyle;
