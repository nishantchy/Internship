import { z } from "zod";

export const vacancySchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  noOfVacancy: z.string().min(1, { message: "No of vacancy is required." }),
  jobDescription: z
    .string()
    .min(1, { message: "Job Description is required." }),
  qualification: z.string().min(1, { message: "Qualification is required." }),
  responsibilities: z
    .string()
    .min(1, { message: "Responsibilities is required." }),
  location: z.string().min(1, { message: "Location is required." }),
  vacancyClosed: z.boolean().nullish(),
});

export type TVacancyForm = z.infer<typeof vacancySchema>;
