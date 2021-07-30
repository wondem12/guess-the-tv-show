import styled, { css } from "styled-components";
import { Modal } from "antd";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(p) => p.theme.backGroundColor};
  color: ${(p) => p.theme.textColor};
`;

export const MainTitle = styled.div`
  font-size: ${(p) => p.theme.fonts.xxl};
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const StyledInput = styled.input<{ $wrongAnswer?: boolean }>`
  height: 3rem;
  width: 20%;
  @media screen and (${(p) => p.theme.sizes.laptopL}) {
    width: 70%;
  }
  margin: 1rem 0;
  border-radius: ${(p) => p.theme.mixin.borderRadius};
  color: ${(p) => p.theme.textColor};
  font-size: ${(p) => p.theme.fonts.xl};
  background-color: ${(p) => p.theme.backGroundColorSecondary};
  border: ${(p) => (p.$wrongAnswer ? "2px solid red" : "1px solid grey")};
`;

export const StyledButton = styled.button`
  width: 8rem;
  height: 3rem;
  background-color: ${(p) => p.theme.colors.lightBlue};
  border-radius: ${(p) => p.theme.mixin.borderRadius};
  color: ${(p) => p.theme.textColor};
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  &&:hover {
    transform: scale(1.05);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const Hint = styled.div<{ $visible: boolean }>`
  visibility: ${(p) => (p.$visible ? "visible" : "hidden")};
  margin-top: 1rem;
  color: ${(p) => p.theme.textColor};
`;
export const Point = styled.div`
  font-size: ${(p) => p.theme.fonts.l};
  margin-right: 0.5rem;
  color: ${(p) => p.theme.textColor};
`;
export const Points = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const TvPoster = styled.img<{ $rightAnswer?: boolean }>`
  ${({ $rightAnswer }) =>
    $rightAnswer
      ? css`
          border: 3px solid green;
        `
      : css`
          filter: blur(3px);
        `}
`;

export const Instructions = styled.div`
  text-align: center;
  font-size: ${(p) => p.theme.fonts.s};
  width: 60%;
  margin: 1rem 0;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: ${(p) => p.theme.backGroundColor};
    color: ${(p) => p.theme.textColor};
  }
  .ant-modal-close-x {
    svg {
      color: ${(p) => p.theme.textColor};
    }
  }
`;
