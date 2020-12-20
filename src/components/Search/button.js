import React from "react";
import icoSearch from "../../assets/search.svg";
import * as S from "./styles";

const Button = ({ handleClick }) => {
  return (
    <S.Button onClick={handleClick}>
      <img src={icoSearch} alt="Lupa" />
    </S.Button>
  );
};

export default Button;
