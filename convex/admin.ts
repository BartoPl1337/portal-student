// Dodawanie usera do bazy danych (POZNIEJ PLIK BEDZIE USUNIETY)
// Przyklad (wpisujemy w konsoli):   npx convex run admin:createUser '{"email":"test@student.pl","password":"haslo123","name":"Jan Kowalski"}'
import { createAuth } from "./auth";
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = internalMutation({
  args: {
    email: v.string(),
    password: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const auth = createAuth(ctx);
    await auth.api.signUpEmail({
      body: {
        email: args.email,
        password: args.password,
        name: args.name,
      },
    });
  },
});
