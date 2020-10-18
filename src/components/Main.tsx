import React, { Fragment } from "react";
import styled from "styled-components";

import GlobalStyle from "../styles/globalStyle";

import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Headline } from "./Headline";
import { NavigationBar } from "./NavigationBar";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMainContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0 150px;
  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

export function Main(): JSX.Element {
  return (
    <Fragment>
      <GlobalStyle />
      <StyledContent>
        <NavigationBar />
        <StyledMainContainer className="mainContent">
          <Headline />
          <About />
          <Experience />
          <Contact />
        </StyledMainContainer>
      </StyledContent>
    </Fragment>
  );
}
