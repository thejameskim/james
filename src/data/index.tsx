import { FacebookIcon, GitHubIcon, LinkedinIcon, MailIcon } from "../assets";

type SocialMedia = {
  name: string;
  url: string;
  icon: JSX.Element;
};

type Jobs = {
  company: string;
  companyLink: string;
  role: string;
  startDate: string;
  endDate: string;
};

export const email = "jsjkim97@gmail.com";

export const socialMedia: SocialMedia[] = [
  {
    name: "Email",
    url: "mailto:jsjkim97@gmail.com",
    icon: MailIcon(),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/thejameskim/",
    icon: LinkedinIcon(),
  },
  {
    name: "GitHub",
    url: "http://github.com/thejameskim",
    icon: GitHubIcon(),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/thejameskim",
    icon: FacebookIcon(),
  },
];

export const jobs: Jobs[] = [
  {
    company: "Atlassian",
    companyLink: "https://www.atlassian.com/",
    role: "Software Engineer",
    startDate: "July 2020",
    endDate: "Present",
  },
  {
    company: "Liberty Mutual Insurance",
    companyLink: "https://www.libertymutual.com/",
    role: "Software Engineer Intern",
    startDate: "June 2019",
    endDate: "December 2019",
  },
  {
    company: "University of Washington Information School",
    companyLink: "https://ischool.uw.edu/",
    role: "Teaching Assistant - INFO 340: Client-Side Development",
    startDate: "January 2019",
    endDate: "June 2020",
  },
];
