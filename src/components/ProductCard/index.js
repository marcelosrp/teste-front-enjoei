import React from "react";
import * as S from "./styles";

import { getImageUrl, IMAGE_PRESETS } from "../../utils/get-image-url";
import { getDiscount } from "../../utils/get-discount";

const ProductCar = ({ img, title, currentPrice, originalPrice, path }) => {
  return (
    <S.ProductCardWrapper>
      <a
        href={`https://www.enjoei.com.br/p/${path}`}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      <S.ProductImg
        src={getImageUrl(img, IMAGE_PRESETS.product.card)}
        alt={title}
      />

      {currentPrice !== originalPrice && (
        <S.Discount>{getDiscount(currentPrice, originalPrice)}</S.Discount>
      )}
      <S.Price>
        {currentPrice === originalPrice ? (
          <S.PriceText>R$ {originalPrice}</S.PriceText>
        ) : (
          <S.PriceText current>
            R$ {currentPrice} <span>R$ {originalPrice}</span>
          </S.PriceText>
        )}
      </S.Price>
    </S.ProductCardWrapper>
  );
};

export default ProductCar;
