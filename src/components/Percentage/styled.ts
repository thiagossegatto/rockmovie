import styled from "styled-components";

interface IContainer {
  percentage: number;
}

export const Container = styled.div<IContainer>`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 60px;

  > svg {
    width: 60px;
    height: 60px;
    > circle {
      width: 60px;
      height: 60px;
      fill: none;
      stroke-width: 10;
      stroke: #333;
      transform: translate(5px, 5px);
      stroke-dasharray: 160;
      stroke-dashoffset: 160;
    }
    > circle:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: #323232;
    }
    > circle:nth-child(2) {
      stroke-dashoffset: calc(160 - (160 * ${(props) => props.percentage}) / 100);
      stroke: #FFF;
    }
  }

  > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #FFF;
  }
`;
