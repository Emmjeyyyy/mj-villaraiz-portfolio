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
    role: "Full Stack Developer",
    company: "Infinity Hub Digital Marketing",
    location: "Davao, PH",
    period: "February 2026 - May 2026",
    type: "Internship",
    description: "Developed and enhanced enterprise web application modules using React, Laravel, and PHP, focusing on frontend redesigns, backend integrations, workflow automation, medical record management, and improving overall system usability during a full-stack development internship.",
    tech: ["React", "Node.js", "Laravel", "PHP"]
  }
];
