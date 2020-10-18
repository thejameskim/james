import styled from "styled-components";
import { link, hover } from "../../styles/mixins";


export const Experience = styled.section``;

export const Jobs = styled.div``;

export const Job = styled.div`
  margin-bottom: 20px;
`;

export const Date = styled.div`
  font-family: var(--font-mono);
`;

export const CompanyDate = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: var(--tan);
  }
  ${link}

`;
