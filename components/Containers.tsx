import styled from "styled-components";
interface FlexContainer {
  scrollable?: boolean;
}
export const FlexContainer = styled.section<FlexContainer>`
  .row {
    display: flex;
    ${(scrollable) =>
      scrollable &&
      `overflow-x: scroll;
       -webkit-box-pack: justify;
       justify-content: space-between;`}
  }
`;
interface IGridContainerProps {
  columns?: number;
  rows?: number;
}
export const GridContainer = styled.section<IGridContainerProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns ? `repeat(${columns}, 1fr)` : "1fr"};
  grid-template-rows: ${({ rows }) => (rows ? `repeat(${rows}, 1fr)` : "1fr")};
  padding: 0;
  gap: 1.6rem;
`;
interface IImageContainerProps {
  mBottom: string;
  pBottom: string;
  height: string;
  rounded?: boolean;
}
export const ImageContainer = styled.div<IImageContainerProps>`
  position: relative;
  margin-bottom: ${({ mBottom }) => mBottom};
  padding-bottom: ${({ pBottom }) => pBottom};
  height: ${({ height }) => height};
  img {
    ${({ rounded = false }) => rounded && `border-radius: 8px`}
  }
`;
