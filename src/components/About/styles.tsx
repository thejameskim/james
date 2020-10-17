import styled from "styled-components";

export const About = styled.section``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  width: 50%;

  ul {
    margin-top: 0px;
  }
`;

export const ProfilePicture = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid var(--tan);

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
