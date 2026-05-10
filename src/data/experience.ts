export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full-Stack Developer Intern",
    company: "Infinity Hub Digital Marketing",
    location: "Davao, PH",
    period: "Feb 2026 - May 2026",
    type: "Internship",
    description: "Developed and enhanced enterprise web application modules using React, Laravel, and PHP, focusing on frontend redesigns, backend integrations, workflow automation, medical record management, and improving overall system usability during a full-stack development internship.",
    tech: ["React", "Node.js", "Laravel", "PHP"]
  },
  {
    id: 2,
    role: "Participant",
    company: "CODECHUM PROGRAMMING CHALLENGE 2024",
    location: "",
    period: "Nov 2024",
    type: "Contest",
    description: "Participated in the CodeChum Programming Challenge 2024.",
    tech: []
  },
  {
    id: 3,
    role: "Participant",
    company: "MCITS | Programming Contest | PSITE 2024",
    location: "",
    period: "May 2024",
    type: "Contest",
    description: "Participated in the MCITS Programming Contest 2024.",
    tech: []
  },
  {
    id: 4,
    role: "Participant",
    company: "MCITS | Programming Contest | PSITE 2023",
    location: "",
    period: "May 2023",
    type: "Contest",
    description: "Participated in the MCITS Programming Contest 2023.",
    tech: []
  }
];
