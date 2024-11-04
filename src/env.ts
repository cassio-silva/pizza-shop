import z from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === "true"),
});

/* 
  Vite não traz as variáveis de ambiente de process.env, isso é 
  uma particularidade do Node, no caso do vite é "import.meta.env"
*/

export const env = envSchema.parse(import.meta.env);