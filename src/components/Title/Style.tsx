import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 0 0;
`;

export const StyledTitle = styled.ul`
  display: inline-block;
  padding: 0;
  color: ${(p) => p.theme.textColor};

  li {
    border-bottom: 1px solid #666;
    margin-right: 10px;
    font-weight: bold;
    font-size: 35px;
    text-align: center;
    display: inline-block;
    text-transform: uppercase;
    width: 30px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  li.space {
    border-bottom: 0px;
  }
  &:last-child li:last-child {
    display: none;
  }
`;

export const StyledSpan = styled.span<{ $visible: boolean }>`
  visibility: ${(p) => (p.$visible ? "visible" : "hidden")};
`;
