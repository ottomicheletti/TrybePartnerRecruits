import nextAuth from "next-auth";
import { AppProviders } from "next-auth/providers";

export default NextAuth({
    providers: [
        AppProviders.providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: 'read:user'
        })
    ]
})