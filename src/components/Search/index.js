import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

import Input from "./input";
import Button from "./button";
import Reset from "./reset";

import * as S from "./styles";

const Search = () => {
  const {
    handleInputSearch,
    search,
    handleResetSearch,
    handleClickSearch,
    error,
  } = useContext(GlobalContext);

  return (
    <S.Wrapper>
      {search && (
        <Reset label="limpar filtro" handleClick={handleResetSearch} />
      )}
      <Input handleChange={handleInputSearch} search={search} error={error} />
      <Button handleClick={handleClickSearch} />
    </S.Wrapper>
  );
};

export default Search;
