import { z } from "zod";
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const memberSchema = z.object({
  name: z.string().min(1, { message: "Full name is required." }),
  position: z.string().min(1, { message: "Position is required." }),
  isChairman: z.boolean().default(false),
  image: z
    .any()
    .refine((file) => file !== null && file !== undefined, "Image is required.")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.type),
      "Only .png, .jpg, .jpeg are supported.",
    ),
});

export type TMemberForm = z.infer<typeof memberSchema>;

export const memberEditSchema = z.object({
  group: z.enum([
    "executive",
    "departmental",
    "central",
    "provincial",
    "advisory",
    "co-society",
    // Countries
    "america",
    "india",
    "china",
    "britain",
    "europe",
    "japan",
    "france",
    "canada",
    "australia",
    "others",
  ]),
  name: z.string().min(1, { message: "Full name is required." }),
  position: z.string().min(1, { message: "Position is required." }),
  isChairman: z.boolean().default(false),
  image: z
    .any()
    .refine(
      (file) => file && file.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`,
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.type),
      "Only .png, .jpg, .jpeg are supported.",
    )
    .nullish(),
});

export type TMemberEditForm = z.infer<typeof memberEditSchema>;

export const memberServer = z.object({
  group: z.enum([
    "executive",
    "departmental",
    "central",
    "provincial",
    "advisory",
    "co-society",
    // Countries
    "america",
    "india",
    "china",
    "britain",
    "europe",
    "japan",
    "france",
    "canada",
    "australia",
    "others",
  ]),
  name: z.string().min(1),
  position: z.string().min(1),
  image: z.object({
    public_id: z.string(),
    secure_url: z.string(),
  }),
  isChairman: z.boolean().default(false),
});

export type TServerMember = z.infer<typeof memberServer>;

export const provinceMemberSchema = z.object({
  name: z.string().min(1, { message: "Full name is required." }),
  province: z.string().min(1, { message: "Province is required." }),
  position: z.string().min(1, { message: "Position is required." }),
  isChairman: z.boolean().default(false),
  image: z
    .any()
    .refine((file) => file !== null && file !== undefined, "Image is required.")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.type),
      "Only .png, .jpg, .jpeg are supported.",
    ),
});

export type TProvinceMember = z.infer<typeof provinceMemberSchema>;

export const provinceMemberEditSchema = provinceMemberSchema.extend({
  image: z
    .any()
    .refine(
      (file) => file && file.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`,
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.type),
      "Only .png, .jpg, .jpeg are supported.",
    )
    .nullish(),
});
export type TProvinceMemberEditShmema = z.infer<
  typeof provinceMemberEditSchema
>;
