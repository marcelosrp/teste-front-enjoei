import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStorage } from "./Context";

import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </GlobalStorage>
  );
};

export default App;
