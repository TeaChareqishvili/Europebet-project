import React from "react";
import styled from "styled-components";

export default function Text() {
  return (
    <TextOver>
      <div>
        <p>jhvjh</p>
        <h3>50000</h3>
      </div>
      <div>
        <p>jhvjh</p>
        <h3>50000</h3>
      </div>
    </TextOver>
  );
}

export const TextOver = styled.div`
    display:grid;
    grid-template-columns:2fr 2fr;
    align-items:center;
`;
