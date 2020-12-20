import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const InputWrapper = styled.input`
  border: ${(props) =>
    props.error
      ? "1px solid var(--border-input-error)"
      : "1px solid var(--border-input)"};
  border-radius: 3px;
  height: 40px;
  padding: 0 50px 0 10px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

export const ResetButton = styled.button`
  color: var(--bgcolor-button-filtro);
  background-color: transparent;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  width: 100px;
`;
