import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    email: z.email(),
    first_name: z.string().min(2).max(100),
    last_name: z.string().min(2).max(100),
    avatar: z.string().url(),
});

const creationSchema = z.object({
    id: z.number(),
    token: z.string().optional(),
});


export { userSchema, creationSchema }