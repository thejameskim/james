import React from "react";
import * as styles from "./styles";
import { jobs } from "../../data";

export function Experience(): JSX.Element {
  return (
    <styles.Experience id='experience'>
      <h2>Experience</h2>
      <styles.Jobs>
        {jobs.map((job) => {
          return (
            <styles.Job key={job.company}>
              <styles.CompanyDate>
                <a target='_blank' rel='noreferrer' href={job.companyLink}>
                  {job.company}
                </a>
                <styles.Date>
                  {job.startDate} - {job.endDate}
                </styles.Date>
              </styles.CompanyDate>
              {job.role}
            </styles.Job>
          );
        })}
      </styles.Jobs>
    </styles.Experience>
  );
}
