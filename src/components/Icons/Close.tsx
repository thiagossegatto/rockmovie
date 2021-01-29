import React from 'react'

interface IProps {
  onClick(): void;
}

const Close = ({ onClick }: IProps) => (
  <button onClick={onClick}>
    <svg version="1.1" id="Capa_1"
      viewBox="0 0 512.001 512.001" width="25" height="25">
      <g>
        <g id="close">
          <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"/>
        </g>
      </g>
    </svg>
  </button >
)

export default Close;