import styled from "styled-components";
import { link, buttonHover } from "../../styles/mixins";

export const NavBar = styled.div`
  background-color: var(--blue);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--navbar-height);
  padding: 0px 50px;
  align-items: center;
`;

export const NavBarLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-md);
  height: 50px;
  width: 50px;
  
  svg:hover {
    fill: var(--tan-tint);
  }
`;

export const NavBarLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const Link = styled.div`
  ${link}
`;

export const NavBarLink = styled.a`
  margin: 0px 5px;
  padding: 10px;
  position: relative;
  font-size: var(--font-md);
`;

export const NavBarResumeButton = styled.a`
  border: 1px solid var(--tan);
  color: var(--tan);
  border-radius: var(--border-radius);
  line-height: 1;
  padding: 0.75rem 1rem;
  margin-left: 15px;

  ${buttonHover}
`;
