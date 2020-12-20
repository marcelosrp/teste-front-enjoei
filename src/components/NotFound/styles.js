import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 32px;
  font-weight: 900;
  margin: 20px 0 0 0;

  @media (max-width: 700px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 20px 0;
`;

export const Button = styled.button`
  background-color: #f05b78;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin: 20px 0 50px 0;
  padding: 15px 25px;
`;

export const Vector = styled.img`
  max-width: 100%;
`;
