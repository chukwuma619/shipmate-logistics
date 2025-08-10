import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { nextCookies } from "better-auth/next-js";
import { users, accounts, sessions, verifications } from "./db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user: users,
            account: accounts,
            session: sessions,
            verification: verifications,
        },
    }),
    plugins: [
        nextCookies(),
    ],
    emailAndPassword: {
        enabled: true,
    },
});