import React from "react";
import * as styles from "./styles";
import { profilePic } from "../../assets";

export function About(): JSX.Element {
  return (
    <styles.About id='about'>
      <h2>About Me</h2>
      <styles.Content>
        <styles.Description>
          <p>
            Hey, James here! I recently graduated from the University of
            Washington&apos;s{" "}
            <a target='_blank' rel='noreferrer' href='https://ischool.uw.edu/'>
              Information School
            </a>{" "}
            and joined Atlassian as a new grad software engineer.
          </p>
          <p>
            My interests currently lie in tech, but I also have interests in
            healthcare and philanthropy work.
          </p>
          In my spare time I like to
          <ul>
            <li>code</li>
            <li>bike</li>
            <li>binge watch Korean dramas</li>
            <li>play video games</li>
            <li>or travel</li>
          </ul>
        </styles.Description>
        <styles.ProfilePicture>
          <img src={profilePic} />
        </styles.ProfilePicture>
      </styles.Content>
    </styles.About>
  );
}
