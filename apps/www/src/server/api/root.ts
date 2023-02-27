import { exampleRouter } from "./routers/example"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
	example: exampleRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
