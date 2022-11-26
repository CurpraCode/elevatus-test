import { ReactNode } from "react";

export interface Job {
  uuid: string;
  url: string;
  uri: string;
  visa_sponsorship: boolean;
  willing_to_relocate: boolean;
  willing_to_travel: boolean;
  years_of_experience: [];
  translations: [];
  skills: [];
  title: string;
  score: number;
  salary: Record<string, unknown>;
  outside_key: null;
  posted_at: string;
  requirements: string;
  outside: boolean;
  nationality: [];
  major: [];
  languages: [];
  job_type: [string];
  is_top: boolean;
  is_applied: boolean;
  industry: [];
  has_profile: boolean;
  gpa: number;
  gender: null;
  description: string;
  degree: [];
  company_uuid: string;
  career_level: [];
  applied_at: null;
  geolocation: Record<string, unknown>;
  location: Record<string, ReactNode>;
}

export default interface JobInterface {
  jobs: Job[];
}
