import { z } from "zod";

export type ValuesTypes = {
  Email: string;
  password: string;
};

export const SignUpSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string(),
});

export const SignInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type UploadType = {
  Upload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Submit: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  isFileError: boolean;
  fl?: number;
};
