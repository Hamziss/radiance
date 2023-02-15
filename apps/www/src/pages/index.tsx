import { type NextPage } from "next"
import Head from "next/head"

import FeaturesCards from "@/components/FeaturesCards"
import { TooltipHelper } from "@/components/Tooltip"
import { stack } from "@/constants/stack"
import Image from "next/image"

const Home: NextPage = () => {
	// const hello = api.example.hello.useQuery({ text: "from tRPC" })

	return (
		<>
			<Head>
				<title>Radiance</title>
				<meta name="description" content="Radiance a TS turborepo" />
				<link rel="icon" href="/icon.png" />
			</Head>

			<main className="flex  flex-col items-center justify-start bg-black ">
				<h1 className="mt-44 lg:text-6xl xl:text-7xl">
					<span className="fancy-bg-blue font-extrabold ">
						Typesafety.&nbsp;
					</span>
					<span className="fancy-bg-orange font-extrabold ">
						Scalability.&nbsp;
					</span>
					<span className="fancy-bg-green font-extrabold">Security.&nbsp;</span>
				</h1>
				<p className="mt-5 text-gray-600 xl:text-xl">
					A TS turborepo where i build and try new technologies on a shared
					codebase.
				</p>
				<div className="px-8 py-28">
					<div className="grid items-start justify-center gap-8">
						<div className="group relative">
							<div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#2400ff] to-[#00fff0] opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
							<button className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none">
								<span className=" text-indigo-400 transition duration-200 group-hover:text-gray-100">
									Getting Started &rarr;
								</span>
							</button>
						</div>
					</div>
				</div>
				<p className="mt-36 text-base text-gray-600">USED TECHNOLOGIES</p>
				<div className="mt-2 flex items-center gap-5 text-white ">
					{stack.map((item, i) => (
						<TooltipHelper key={i} content={item.tooltip}>
							<Image
								className=" opacity-25 duration-500 hover:opacity-100"
								width={40}
								height={40}
								src={item.icon}
								alt={item.name}
							/>
						</TooltipHelper>
					))}
				</div>
			</main>
			<FeaturesCards />
		</>
	)
}

export default Home

// const AuthShowcase: React.FC = () => {
// 	const { data: sessionData } = useSession()

// 	const { data: secretMessage } = api.example.getSecretMessage.useQuery(
// 		undefined, // no input
// 		{ enabled: sessionData?.user !== undefined },
// 	)

// 	return (
// 		<div className="flex flex-col items-center justify-center gap-4">
// 			{/* <p className="text-center text-2xl text-white">
// 				{sessionData && <span>Logged in as {sessionData.user?.name}</span>}
// 				{secretMessage && <span> - {secretMessage}</span>}
// 			</p> */}
// 			<button
// 				className={clsx(
// 					"inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
// 					"bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900",
// 					"hover:bg-gray-50",
// 					"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
// 					// Register all radix states
// 					"group",
// 					"radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
// 					"radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
// 					"radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50",
// 				)}
// 				onClick={sessionData ? () => void signOut() : () => void signIn()}
// 			>
// 				{sessionData ? "Sign out" : "Sign in"}
// 			</button>
// 		</div>
// 	)
// }
