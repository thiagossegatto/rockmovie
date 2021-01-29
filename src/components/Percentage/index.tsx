import React from 'react'
import { Container } from './styled';

interface IPercentage {
  percentage: number;
}

function Percentage({ percentage }: IPercentage) {
  return (
    <Container percentage={percentage * 10}>
      <svg>
        <circle cx="25" cy="25" r="25"></circle>
        <circle cx="25" cy="25" r="25"></circle>
      </svg>
      <span>
        {percentage}
      </span>
    </Container>
  )
}
export default Percentage;