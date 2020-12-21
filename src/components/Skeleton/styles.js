import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  background-color: #dddbdd;
  flex: 1 1 auto;
  height: 230px;
  margin: 8px;
  overflow: hidden;
  position: relative;
  width: 230px;

  @media (max-width: 700px) {
    height: 155px;
    width: 155px;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`;
