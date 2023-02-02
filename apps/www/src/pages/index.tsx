import { type NextPage } from "next"
import Head from "next/head"

import { NavigationMenu } from "@components/NavBar"

const Home: NextPage = () => {
	// const hello = api.example.hello.useQuery({ text: "from tRPC" })

	return (
		<>
			<Head>
				<title>Radiance</title>
				<meta name="description" content="Radiance a TS turborepo" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<main className="flex min-h-screen flex-col items-center  bg-black ">
				<NavigationMenu />
				<h1 className="mt-28 lg:text-6xl xl:text-7xl">
					<span className="fancy-bg-blue font-extrabold ">
						Typesafety.&nbsp;
					</span>
					<span className="fancy-bg-orange font-extrabold ">
						Scalability.&nbsp;
					</span>
					<span className="fancy-bg-green font-extrabold">Security.&nbsp;</span>
				</h1>
				<p className="mt-7 text-gray-600 xl:text-xl">
					A TS turborepo where i build and try new technologies on a shared
					codebase.
				</p>
			</main>
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
