import React from "react";
import * as S from "./styles";

const Input = ({ handleChange, search, error }) => {
  return (
    <S.InputWrapper
      onChange={handleChange}
      type="text"
      name="search"
      value={search}
      placeholder="Buscar"
      error={error}
    />
  );
};

export default Input;
