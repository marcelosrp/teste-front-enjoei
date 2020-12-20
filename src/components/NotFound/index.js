import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

import vector from "../../assets/not-found-image.svg";
import * as S from "./styles";

const NotFoundComponent = () => {
  const { handleResetSearch } = useContext(GlobalContext);

  return (
    <S.Wrapper>
      <S.Title>ué, não encontramos nadinha</S.Title>
      <S.Text>que tal começar do começo?</S.Text>
      <S.Button onClick={handleResetSearch}>limpar busca</S.Button>
      <S.Vector
        src={vector}
        alt="Imagem de um gato tirando selfie em uma paisagem de parque"
      />
    </S.Wrapper>
  );
};

export default NotFoundComponent;
