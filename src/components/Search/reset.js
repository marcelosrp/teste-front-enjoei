import React from "react";
import * as S from "./styles";

const Reset = ({ label, handleClick }) => {
  return <S.ResetButton onClick={handleClick}>{label}</S.ResetButton>;
};

export default Reset;
