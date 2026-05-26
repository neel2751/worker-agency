export type JobRole = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};
