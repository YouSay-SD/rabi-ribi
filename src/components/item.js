import React from "react";
import styled from "styled-components";
import { respondBelow } from "../theme/breakPoints";

const ItemStyled = styled.div`
  /* Mobile */
  ${respondBelow.sm`
    `}
`;

function Item() {
  return (

    <ItemStyled>


    </ItemStyled>

  );       
}

export default Item;
