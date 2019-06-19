import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import { useState } from "react";
export const theme = {
  muli: "Muli, sans-serif",
  opensans: "Open Sans, sans-serif",
  offWhite: "#EDEDED",
  darkblue: "rgb(96, 135, 150)",
  grey: "hsl(220, 4%, 37%)",
  darkGrey: "hsl(220, 7.3%, 34.1%)",
  black: "#202124",
  breakpoint: {
    w: ["1000px", "750px"],
    h: ["800px"]
  }
};

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {

        padding: 0;
        margin: 0;
        font-size: 1.6rem;
        font-weight:300;
        font-family: ${theme.opensans};
        color:${theme.black};
        background:${theme.offWhite};
      }
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  /* height: 90vh; */
  @media (max-width: ${theme.breakpoint.w[0]}) {
    /* 
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: auto 9fr; */
  }
  @media (max-width: ${theme.breakpoint.w[1]}) {
    /* grid-template-rows: auto 7fr; */
  }
`;

const ContentContainer = styled.div`
  /* place-self: stretch;
  display: grid; */

  /* height: auto; */
  margin: 1rem auto;
`;

const Page = props => {
  const [active, setActive] = useState("work");
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Meta />
        <GlobalStyle />
        <Header active={active} setActive={setActive} />
        <ContentContainer>{props.children}</ContentContainer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Page;
