import Monroe from "../assets/Images/Logos/monroe.png";
import Troy from "../assets/Images/Logos/Troy.webp";
import Coventry from "../assets/Images/Logos/Coventry.gif";

interface educationItems {
  logo?: string;
  university: string;
  location: string;
  degree: string;
  duration: string;
  gpa?: string;
  note?: string;
  link?: string;
}

export const education: educationItems[] = [
  {
    logo: Monroe,
    university: "Monroe University",
    location: "New Rochelle, NY",
    degree: "Master of Science in Computer Science",
    duration: "Expected Graduation: May 2026",
    link: "https://www.monroecollege.edu",
  },
  {
    logo: Troy,
    university: "Troy University",
    location: "Troy, AL",
    degree: "Master of Science in Computer Science (Transferred)",
    duration: "Jan 2024 – May 2024",
    note: "Completed 9 credits before transferring to Monroe University",
    link: "https://www.troy.edu",
  },
  {
    logo: Coventry,
    university: "Coventry University",
    location: "Coventry, United Kingdom",
    degree: "Bachelor of Science in Computer Science",
    duration: "Mar 2019 – Aug 2022",
    gpa: "3.41/4.0",
    link: "https://www.coventry.ac.uk",
  },
];
