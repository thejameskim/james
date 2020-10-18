import styled, { css } from "styled-components";

export const link = css`
  a {
    display: inline-block;
    position: relative;
  }
  a:after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--tan);
    visibility: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  a:hover:after {
    visibility: visible;
    width: 100%;
  }
`;

export const buttonHover = css`
  &:hover,
  &:focus {
    background-color: var(--tan-tint);
  }
`;

export const hover = css`
  &:hover,
  &:focus {
    color: var(--tan);
  }
`;
