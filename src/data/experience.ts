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
    description: "Developing and maintaining web applications using modern full-stack technologies. Gaining hands-on experience in a professional digital marketing agency environment, collaborating with teams to deliver high-quality digital solutions.",
    tech: ["React", "Node.js", "Laravel", "PHP"]
  }
];
