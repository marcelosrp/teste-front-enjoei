import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  border-radius: 3px;
  flex: 1 1 auto;
  height: 230px;
  margin: 8px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  width: 230px;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    transform: translateY(-10px);
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    text-indent: -99999px;
  }

  @media (max-width: 700px) {
    height: 155px;
    width: 155px;
  }
`;

export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const Price = styled.div`
  background-color: #fff;
  border-radius: 2px;
  bottom: 3px;
  font-size: 12px;
  left: 3px;
  padding: 3px 15px;
  position: absolute;
`;

export const PriceText = styled.p`
  color: ${(props) =>
    props.current
      ? "var(--color-current-price)"
      : "var(--color-original-price)"};
  font-size: 12px;
  font-weight: 600;
  margin: 0;

  span {
    color: rgba(0, 0, 0, 0.4);
    text-decoration: line-through;
  }
`;

export const Discount = styled.div`
  background-color: var(--bgcolor-discount);
  color: var(--color-discount);
  border-radius: 2px;
  top: 3px;
  font-size: 12px;
  right: 3px;
  padding: 3px 15px;
  position: absolute;
`;
