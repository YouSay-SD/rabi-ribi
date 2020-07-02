import React from "react";
import styled from "styled-components";
import { respondBelow } from "../theme/breakPoints";
import PageView from "./pageView";

const PagesViewerStyled = styled.section``;

const PagesViewerTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const PagesViewerGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  /* Tablet */
  ${respondBelow.md`
      grid-template-columns: repeat(2, 1fr);
  `}

  /* Mobile */
  ${respondBelow.sm`
      grid-template-columns: 1fr;
  `}
`;

const pageViewList = [
  {
    img: "./img/pageView/1.png",
    alt: "Image",
    title: "Image",
    key: 1,
  },

  {
    img: "./img/pageView/2.png",
    alt: "Image",
    title: "Image",
    key: 2,
  },

  {
    img: "./img/pageView/3.jpg",
    alt: "Image",
    title: "Image",
    key: 3,
  },

  {
    img: "./img/pageView/4.jpg",
    alt: "Image",
    title: "Image",
    key: 4,
  },

  {
    img: "./img/pageView/5.png",
    alt: "Image",
    title: "Image",
    key: 5,
  },

  {
    img: "./img/pageView/6.png",
    alt: "Image",
    title: "Image",
    key: 6,
  },
];

function PagesViewer() {
  return (

    <PagesViewerStyled className="rose-background">

      <div className="container">

        <PagesViewerTitleStyled>

          <h2 className="box-title">Pages:</h2>

        </PagesViewerTitleStyled>

        <PagesViewerGridStyled>

          {pageViewList.map(({ key, img, alt, title }) => (
            <PageView key={key} img={img} alt={alt} title={title} />
          ))}

        </PagesViewerGridStyled>

      </div>

    </PagesViewerStyled>
    
  );
}

export default PagesViewer;
