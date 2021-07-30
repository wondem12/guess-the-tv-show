import { FC, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import darkTheme from "../../theme/dark";
import lightTheme from "../../theme/light";

const GlobalStyle = createGlobalStyle`

*{
  outline:none;
  padding:0;
  margin:0;
  box-sizing:border-box;
}
html{
  height: 100%;
}

body {
    font-weight: 300;
    font-family: 'Amatic SC', cursive;
    height:100%;
}

`;

const GlobalLayout: FC = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((t) => (t.id === "dark" ? lightTheme : darkTheme));
        },
      }}
    >
      <GlobalStyle />
      <StyledLayout>{children}</StyledLayout>
    </ThemeProvider>
  );
};

export default GlobalLayout;

const StyledLayout = styled.div`
  height: 100vh;
  background-color: ${(p) => p.theme.backGroundColor}; ;
`;
