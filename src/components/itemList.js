import React from "react";
import styled from "styled-components";
import { respondBelow } from "../theme/breakPoints";
import BlockTitle from "./blockTitle";
import Item from "./item";

const ItemListStyled = styled.div`
  /* Mobile */
  ${respondBelow.sm`
    `}
`;

function ItemList() {
  return (
    <ItemListStyled>

      <BlockTitle title="Item List" />
    
      <div className="container">

        <Item />

      </div>

    </ItemListStyled>
  );       
}

export default ItemList;
