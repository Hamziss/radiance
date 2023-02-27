import { Card } from "@geist-ui/core"

export default function Benchmarks() {
	return (
		<main className=" dark:text-white">
			<div className="flex flex-col items-center">
				<h1>hello world from vercel edge</h1>
				<h1>the request took:</h1>
				<div className=" font-primary text-3xl font-bold">120 ms</div>
			</div>
			<div className="flex flex-wrap justify-center gap-4">
				<Card hoverable className=" row-span-2 " padding="12px">
					<span className="mb-6">server-based express</span>
				</Card>
				<Card hoverable className=" row-span-2 ">
					server-based fastify
				</Card>
				<Card hoverable className=" row-span-2 ">
					fastify on vercel edge
				</Card>
				<Card hoverable className=" row-span-2 ">
					nextjs api route
				</Card>
				<Card hoverable className=" row-span-2 ">
					nextjs vercel edge
				</Card>
				<Card hoverable className=" row-span-2 ">
					astro edge
				</Card>
			</div>
		</main>
	)
}
