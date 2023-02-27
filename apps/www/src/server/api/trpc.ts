import { type CreateNextContextOptions } from "@trpc/server/adapters/next"
import { type Session } from "next-auth"

import { getServerAuthSession } from "../auth"
import { prisma } from "../db"

type CreateContextOptions = {
	session: Session | null
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
	return {
		session: opts.session,
		prisma,
	}
}

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
	const { req, res } = opts

	const session = await getServerAuthSession({ req, res })

	return createInnerTRPCContext({
		session,
	})
}

import { initTRPC, TRPCError } from "@trpc/server"
import superjson from "superjson"

const t = initTRPC.context<typeof createTRPCContext>().create({
	transformer: superjson,
	errorFormatter({ shape }) {
		return shape
	},
})

export const createTRPCRouter = t.router

/**
 * Public (unauthed) procedure
 *
 * This is the base piece you use to build new queries and mutations on your
 * tRPC API. It does not guarantee that a user querying is authorized, but you
 * can still access user session data if they are logged in
 */
export const publicProcedure = t.procedure

/**
 * Reusable middleware that enforces users are logged in before running the
 * procedure
 */
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
	if (!ctx.session || !ctx.session.user) {
		throw new TRPCError({ code: "UNAUTHORIZED" })
	}
	return next({
		ctx: {
			// infers the `session` as non-nullable
			session: { ...ctx.session, user: ctx.session.user },
		},
	})
})

/**
 * Protected (authed) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use
 * this. It verifies the session is valid and guarantees ctx.session.user is not
 * null
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed)
