import nextAuth from "next-auth";
import { AppProviders } from "next-auth/providers";

export default NextAuth({
    providers: [
        AppProviders.providers.GitHub({
            clientId: '0f3b7c920a1ce78d6aee',
            clientSecret: 'b7d5c7d449f2ed8499a2c6ca82d7f51fa43e2da3',
            scope: 'read:user'
        })
    ]
})