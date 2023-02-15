import { Card } from "@geist-ui/core"

export default function FeaturesCards({}) {
	return (
		<div className="mt-24 flex w-full flex-col items-center dark:bg-black">
			<div className="grid max-w-6xl grid-cols-3 gap-3">
				<Card hoverable className=" row-span-2 ">
					<span>logo mdx</span>
					<span>MDX</span>
					<span>mdx is a way to write react components in markdown</span>
				</Card>
				<Card hoverable className="row-span-3" height={"300px"}>
					<span>logo turborepo</span>
					<span>Turborepo</span>
					<span> monorepo shared </span>
				</Card>
				<Card hoverable className=" ">
					<span>logo strip</span>
					<span>Stripe</span>
					<span>stripe is a way to get paid with a good dx</span>
				</Card>
				<Card hoverable className="row-span-2">
					<span>logo edge</span>
					<span>Edge API Routes</span>
					<span>
						Build high performance APIs that are deployed acorss edge networks
						regoind using edge runtime
					</span>
				</Card>
				<Card hoverable className="">
					<span> Authentification</span>
					<span>NextAuth</span>
					<span>
						Auth using NextAuth.js with middlewares and OAuth providers
					</span>
				</Card>
			</div>
		</div>
	)
}
