import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: space-between;
  // padding: 0 30px;
`;

export const CustomContainer = styled.div``;

export const PlaceSection = styled.section`
  padding: 5px;
  background: ${(props) => props.theme.section.background};
  color: ${(props) => props.theme.section.text};
`;
