import React from "react";
import * as styles from "./styles";
import { socialMedia } from "../../data";

export function Contact(): JSX.Element {
  return (
    <styles.Contact id='contact'>
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me if you have any questions or would like to
        connect!
      </p>
      <styles.SocialMediaLinks>
        {socialMedia.map((link) => {
          return (
            <a target='_blank' rel='noreferrer' href={link.url} key={link.name}>
              {link.icon}
            </a>
          );
        })}
      </styles.SocialMediaLinks>
    </styles.Contact>
  );
}
