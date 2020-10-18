import styled from "styled-components";
import { buttonHover } from "../../styles/mixins";

export const Headline = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    font-family: var(--font-mono);
    font-size: clamp(var(--font-lg), 5vw, var(--font-xl));
    font-weight: 400;
    color: var(--tan);
  }

  h2 {
    margin: 0;
    font-size: clamp(60px, 10vw, 100px);
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
    font-size: clamp(var(--font-lg), 5vh, var(--font-xl));
  }

  .emailLink {
    border: 1px solid var(--tan);
    color: var(--tan);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--font-md);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    margin-top: 50px;

    ${buttonHover}
  }
`;
