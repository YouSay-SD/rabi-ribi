import React from "react";
import styled from "styled-components";
import { respondBelow } from "../theme/breakPoints";

const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${ props => props.theme.colors.red };
  width: 200px;
  height: 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: all .3s ease;

  /* Mobile */
  ${respondBelow.sm`
  `}

  &:hover {
    background-color: ${ props => props.theme.colors.lightRed };
  }
`;

const ItemImgStyled = styled.div`
  width: 40px;
  border-radius: 30px;
  margin-right: 10px;
  background-color: ${ props => props.theme.colors.darkRed };
  transition: all .3s ease;

  img {
    width: 100%;
    transition: all .3s ease;
  }

  ${ ItemStyled }:hover & {
    transform: scale(1.1);
  }
`;

const ItemTitleStyled = styled.div`
  span {

  }
`;

function Item() {
  return (

    <ItemStyled>

      <ItemImgStyled>

        <img src="./img/item/fire_orb.png" alt="Fire Orb" />

      </ItemImgStyled>

      <ItemTitleStyled>

        <span>Fire Orb</span>

      </ItemTitleStyled>

    </ItemStyled>

  );       
}

export default Item;
