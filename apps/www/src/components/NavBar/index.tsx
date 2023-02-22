import * as Avatar from "@radix-ui/react-avatar"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { clsx } from "clsx"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

type NavigationMenuProps = {
	items?: {
		label: string
		children?: {
			label: string
			href: string
		}[]
	}[]
}

const NavigationMenu = ({}: NavigationMenuProps) => {
	return (
		<NavigationMenuPrimitive.Root className="relative flex w-full flex-col items-center bg-black">
			<div className="w-full max-w-7xl  backdrop-blur-xl">
				<NavigationMenuPrimitive.List className="flex flex-row items-center rounded-lg py-3 px-3">
					<li>
						<Link
							href="/"
							className="flex items-center gap-2 font-serif font-bold text-white"
						>
							<Image
								src={"/icon.png"}
								width={35}
								height={35}
								alt="logo of radiance"
							/>
							Radiance
						</Link>
					</li>
					<NavigationMenuPrimitive.Item>
						<NavigationMenuPrimitive.Link
							className={clsx(
								"ml-8 cursor-not-allowed rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900",
								"text-sm font-medium",
								"text-gray-700 dark:text-gray-100",
								"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
							)}
						>
							Blogs
						</NavigationMenuPrimitive.Link>
						{/* 
					<NavigationMenuPrimitive.Content
						className={clsx(
							"flex w-auto rounded-lg",
							"radix-motion-from-start:animate-enter-from-left",
							"radix-motion-from-end:animate-enter-from-right",
							"radix-motion-to-start:animate-exit-to-left",
							"radix-motion-to-end:animate-exit-to-right",
						)}
					>
						<div className="w-[21rem] p-3 lg:w-[23rem]">
							<div className="grid grid-cols-6 gap-4">
								<div className="col-span-2 w-full rounded-md bg-gray-100 p-4 dark:bg-gray-900"></div>

								<div className="col-span-4 flex w-full flex-col space-y-3 rounded-md bg-gray-100 p-4 dark:bg-gray-900">
									<div className="h-12 w-full rounded-md bg-white dark:bg-gray-700">
										React-query
									</div>
									<div className="h-12 w-full rounded-md bg-white dark:bg-gray-700">
										Zustand
									</div>
									<div className="h-12 w-full rounded-md bg-white text-white dark:bg-gray-700">
										All you need to know about CI/CD Pipelines
									</div>
									<div className="h-12 w-full rounded-md bg-white dark:bg-gray-700"></div>
								</div>
							</div>
						</div>
					</NavigationMenuPrimitive.Content> */}
					</NavigationMenuPrimitive.Item>
					<NavigationMenuPrimitive.Item>
						<NavigationMenuPrimitive.Trigger
							className={clsx(
								"rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900",
								"text-sm font-medium text-gray-700 dark:text-gray-100",
								"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
							)}
						>
							Features
						</NavigationMenuPrimitive.Trigger>

						<NavigationMenuPrimitive.Content
							className={clsx(
								"flex rounded-lg",
								"radix-motion-from-start:animate-enter-from-left",
								"radix-motion-from-end:animate-enter-from-right",
								"radix-motion-to-start:animate-exit-to-left",
								"radix-motion-to-end:animate-exit-to-right",
							)}
						>
							<div className="w-[16rem] p-3 lg:w-[18rem]">
								<div className="flex w-full flex-col space-y-2">
									<NavigationMenuPrimitive.Link
										className={clsx(
											"w-full cursor-not-allowed rounded-md px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900",
											"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
										)}
									>
										<span className="text-sm font-medium text-gray-900 dark:text-gray-100">
											MDX Blog
										</span>

										<div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
											Build a blog with MDX and Next.js
										</div>
									</NavigationMenuPrimitive.Link>

									<NavigationMenuPrimitive.Link
										className={clsx(
											"w-full cursor-not-allowed rounded-md px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900",
											"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
										)}
									>
										<span className="text-sm font-medium text-gray-900 dark:text-gray-100">
											Radix UI
										</span>

										<div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
											An open-source UI component library for building
											high-quality, accessible design systems and web apps.
										</div>
									</NavigationMenuPrimitive.Link>
								</div>
							</div>
						</NavigationMenuPrimitive.Content>
					</NavigationMenuPrimitive.Item>
					<NavigationMenuPrimitive.Item>
						<NavigationMenuPrimitive.Link
							className={clsx(
								"cursor-not-allowed rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900",
								"text-sm font-medium text-gray-700 dark:text-gray-100",
							)}
						>
							Analytics
						</NavigationMenuPrimitive.Link>
					</NavigationMenuPrimitive.Item>
					<NavigationMenuPrimitive.Item>
						<NavigationMenuPrimitive.Link
							href="/docs"
							className={clsx(
								"cursor-not-allowed rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900",
								"text-sm font-medium text-gray-700 dark:text-gray-100",
							)}
						>
							Pricing
						</NavigationMenuPrimitive.Link>
					</NavigationMenuPrimitive.Item>
					<NavigationMenuPrimitive.Item>
						<NavigationMenuPrimitive.Link
							href="/benchmarks"
							className={clsx(
								" rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900",
								"text-sm font-medium text-gray-700 dark:text-gray-100",
							)}
						>
							Benchmarks
						</NavigationMenuPrimitive.Link>
					</NavigationMenuPrimitive.Item>

					<NavigationMenuPrimitive.Indicator
						className={clsx(
							"z-10",
							"top-[100%] flex h-2 items-end justify-center overflow-hidden",
							"radix-state-visible:animate-fade-in",
							"radix-state-hidden:animate-fade-out",
							"transition-[width_transform] duration-[250ms] ease-[ease]",
						)}
					>
						<div className="relative top-1 h-2 w-2 rotate-45 bg-white dark:bg-gray-800" />
					</NavigationMenuPrimitive.Indicator>
					<AuthShowcase />
					<div
						className={clsx(
							"absolute top-[64px] left-24 flex justify-center",
							"",
						)}
						style={{
							perspective: "2000px",
						}}
					>
						<NavigationMenuPrimitive.Viewport
							className={clsx(
								"relative mt-2 overflow-hidden rounded-md bg-white shadow-lg dark:bg-gray-800",
								"w-radix-navigation-menu-viewport",
								"h-radix-navigation-menu-viewport",
								"radix-state-open:animate-scale-in-content",
								"radix-state-closed:animate-scale-out-content",
								"origin-[top_center] transition-[width_height] duration-300 ease-[ease]",
							)}
						/>
					</div>
				</NavigationMenuPrimitive.List>
			</div>
			<div className="h-[1px] w-full bg-slate-700 dark:bg-neutral-600 "></div>
		</NavigationMenuPrimitive.Root>
	)
}
const AuthShowcase: React.FC = () => {
	const { data: sessionData } = useSession()
	console.log(sessionData)

	// const { data: secretMessage } = api.example.getSecretMessage.useQuery(
	// 	undefined, // no input
	// 	{ enabled: sessionData?.user !== undefined },
	// )

	return (
		<div className="ml-auto flex items-center justify-center gap-1">
			{/* <p className="text-center text-2xl text-white">
				{sessionData && <span>Logged in as {sessionData.user?.name}</span>}
				{secretMessage && <span> - {secretMessage}</span>}
			</p> */}
			<Link
				href={sessionData ? "" : "/signin"}
				className={clsx(
					"inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
					" text-gray-700 hover:text-gray-100 dark:text-gray-300 ",
					"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
					// Register all radix states
					"group",
					"radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
					"radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
					"radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50",
				)}
				onClick={sessionData ? () => void signOut() : undefined}
			>
				{sessionData ? "Logout" : "Login"}
			</Link>
			{sessionData ? (
				<Avatar.Root className="bg-blackA3 inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
					<Avatar.Image
						className="h-full w-full rounded-[inherit] object-cover"
						src={sessionData.user.image}
						alt={`${sessionData.user.name}'s avatar`}
					/>
					<Avatar.Fallback
						className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
						delayMs={600}
					>
						{sessionData.user.name?.charAt(0) ||
							sessionData.user.email?.charAt(0)}
					</Avatar.Fallback>
				</Avatar.Root>
			) : (
				<Link
					href="/signup"
					className={clsx(
						"inline-flex select-none items-center justify-center rounded-md  px-4 py-2 text-sm font-medium",
						"border border-gray-600  text-gray-700 dark:text-gray-300 dark:hover:border dark:hover:border-white dark:hover:bg-gray-800 dark:hover:text-white",
						"hover:bg-gray-50",
						"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
						"group",
						"radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
						"radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
						"radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50",
					)}
				>
					Sign up
				</Link>
			)}
		</div>
	)
}

export { NavigationMenu }
