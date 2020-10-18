import React from "react";
import * as styles from "./styles";
import { navLinks } from "../../utils";
import { Logo } from "../../assets";

export function NavigationBar(): JSX.Element {
  return (
    <styles.NavBar>
      <a href='/'>
        <styles.NavBarLogo>
          <Logo />
        </styles.NavBarLogo>
      </a>
      <styles.NavBarLinks>
        <styles.Link>
          {navLinks.map((link) => (
            <styles.NavBarLink key={link.name} href={link.url}>
              {link.name}
            </styles.NavBarLink>
          ))}
        </styles.Link>
        <styles.NavBarResumeButton href='/resume.pdf' target='_blank'>
          Resume
        </styles.NavBarResumeButton>
      </styles.NavBarLinks>
    </styles.NavBar>
  );
}
