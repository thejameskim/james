import React from "react";
import * as styles from "./styles";
import { email } from "../../utils";

export function Headline() {
  const greeting = <h1>Hello, my name is</h1>;
  const name = <h2>James Kim</h2>;
  const summary = (
    <p>
      I'm a software engineer based in Seattle, Washington working remotely on Bitbucket Cloud
      at Atlassian.
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
