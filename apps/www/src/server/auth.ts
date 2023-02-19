import { PrismaAdapter } from "@next-auth/prisma-adapter"
import type { GetServerSidePropsContext } from "next"
import {
	getServerSession,
	type DefaultSession,
	type NextAuthOptions,
} from "next-auth"
import DiscordProvider, { DiscordProfile } from "next-auth/providers/discord"
import EmailProvider from "next-auth/providers/email"
import GithubProvider, { GithubProfile } from "next-auth/providers/github"
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google"
import { env } from "../env/server.mjs"
import { prisma } from "./db"

type UserRole = "user" | "admin"

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string
			image: string
			name: string
			role: UserRole
		} & DefaultSession["user"]
	}
	interface User {
		role: UserRole
		familyName?: string
		email_verified?: boolean
	}
}

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		EmailProvider({
			server: env.EMAIL_SERVER,
			from: env.EMAIL_FROM,
			maxAge: 6 * 60 * 60, // 6 hours
		}),
		DiscordProvider({
			clientId: env.DISCORD_CLIENT_ID,
			clientSecret: env.DISCORD_CLIENT_SECRET,
			profile(profile: DiscordProfile) {
				if (profile.avatar === null) {
					const defaultAvatarNumber = parseInt(profile.discriminator) % 5
					profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
				} else {
					const format = profile.avatar.startsWith("a_") ? "gif" : "png"
					profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
				}
				return {
					id: profile.id,
					email: profile.email,
					email_verified: profile.verified,
					image: profile.image_url,
					name: profile.username,
					role: "user",
					familyName: profile.username,
				}
			},
		}),
		GithubProvider({
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
			profile(profile: GithubProfile) {
				return {
					id: profile.id.toString(),
					image: profile.avatar_url,
					email: profile.email,
					name: profile.name ?? profile.login,
					role: "user",
					familyName: profile.name?.split(" ")[1] ?? profile.login,
				}
			},
		}),
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			profile(profile: GoogleProfile) {
				return {
					id: profile.sub,
					image: profile.picture,
					role: "user",
					email: profile.email,
					name: profile.name,
					email_verified: profile.email_verified,
					familyName: profile.family_name,
				}
			},
		}),
	],
	callbacks: {
		session({ session, user }) {
			if (session.user) {
				session.user.id = user.id
				session.user.role = user.role
			}
			return session
		},
	},
	pages: {
		signIn: "/signin",
	},
}

/**
 * Wrapper for getServerSession so that you don't need
 * to import the authOptions in every file.
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = (ctx: {
	req: GetServerSidePropsContext["req"]
	res: GetServerSidePropsContext["res"]
}) => {
	return getServerSession(ctx.req, ctx.res, authOptions)
}
