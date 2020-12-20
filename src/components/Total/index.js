import React from "react";
import * as S from "./styles";

const Total = ({ total }) => {
  return (
    <S.TotalWrapper>
      {total === 0
        ? "Nenhum produto encontrado"
        : `${total} produtos encontrados`}
    </S.TotalWrapper>
  );
};

export default Total;
