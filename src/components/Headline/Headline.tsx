import React from "react";
import * as styles from "./styles";
import { email } from "../../data";

export function Headline(): JSX.Element {
  const greeting = <h1>Hey, my name is</h1>;
  const name = <h2>James Kim</h2>;
  const summary = (
    <p>
      I&apos;m a full-stack software engineer located in the Seattle area, working on Bitbucket Cloud for
      Atlassian.
    </p>
  );
  const contact = (
    <a href={`mailto:${email}`} className='emailLink'>
      Contact me
    </a>
  );
  const headlineContent = [greeting, name, summary, contact];

  return (
    <styles.Headline>
      {headlineContent.map((item) => {
        return item;
      })}
    </styles.Headline>
  );
}
