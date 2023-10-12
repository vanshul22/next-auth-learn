import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import SlackProvider from "next-auth/providers/slack";
import AppleProvider from "next-auth/providers/apple";
import LinkedInProvider from "next-auth/providers/linkedin";
import DiscordProvider from "next-auth/providers/discord";
import DropboxProvider from "next-auth/providers/dropbox";
import GitlabProvider from "next-auth/providers/gitlab";
import SpotifyProvider from "next-auth/providers/spotify";
import RedditProvider from "next-auth/providers/reddit";
import WordpressProvider from "next-auth/providers/wordpress";
import ZohoProvider from "next-auth/providers/zoho";
import ZoomProvider from "next-auth/providers/zoom"


export const options: NextAuthOptions = {
    providers: [
        // Github Added here
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        // Google Added here
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        // Facebook Added here, Also enable permission from use cases for fb.
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
        }),
        // Manual Email login added here
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Email and Password",
            // `credentials` is used to generate a form on the sign in page.
            credentials: {
                email: { label: "Email", type: "email", placeholder: "test@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: "1", name: "Vanshul Kesharwani", email: "vanshul98@gmail.com", password: "1234567890" }

                if (credentials?.email === user.email && credentials?.password === user.password) {
                    // Any object returned will be saved in `user` property of the JWT
                    return { id: user.id, name: user.name, email: user.email };
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        // Linkedin added here
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
        }),
        // Twitter added here
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET as string
        }),
        // Slack added here
        SlackProvider({
            clientId: process.env.SLACK_CLIENT_ID as string,
            clientSecret: process.env.SLACK_CLIENT_SECRET as string
        }),
        // Apple added here
        AppleProvider({
            clientId: process.env.APPLE_ID as string,
            clientSecret: process.env.APPLE_SECRET as string
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
        }),
        DropboxProvider({
            clientId: process.env.DROPBOX_CLIENT_ID as string,
            clientSecret: process.env.DROPBOX_CLIENT_SECRET as string
        }),
        GitlabProvider({
            clientId: process.env.GITLAB_CLIENT_ID as string,
            clientSecret: process.env.GITLAB_CLIENT_SECRET as string
        }),
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string
        }),
        RedditProvider({
            clientId: process.env.REDDIT_CLIENT_ID as string,
            clientSecret: process.env.REDDIT_CLIENT_SECRET as string
        }),
        WordpressProvider({
            clientId: process.env.WORDPRESS_CLIENT_ID as string,
            clientSecret: process.env.WORDPRESS_CLIENT_SECRET as string
        }),
        ZohoProvider({
            clientId: process.env.ZOHO_CLIENT_ID as string,
            clientSecret: process.env.ZOHO_CLIENT_SECRET as string
        }),
        ZoomProvider({
            clientId: process.env.ZOOM_CLIENT_ID as string,
            clientSecret: process.env.ZOOM_CLIENT_SECRET as string
        })
    ], pages: {
        signIn: "/auth/signin"
    }
}