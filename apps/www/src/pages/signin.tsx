import { env } from "@/env/client.mjs"
import { Button, Divider, Input, Link, Note } from "@geist-ui/core"
import Github from "@geist-ui/icons/github"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
export default function SignIn() {
	const router = useRouter()
	const error = ErrorHandler(router.query.error as string)

	const handleSignInEmail = async (
		e: React.KeyboardEvent<HTMLInputElement>,
	) => {
		console.log("in")
		if (e.key === "Enter") {
			signIn("email", {
				email: e.currentTarget.value,
				callbackUrl: env.NEXT_PUBLIC_CLIENT_BASE_URL,
				redirect: false,
				role: "user",
			}).then(res => {
				router.push(res?.url as string)
			})
		}
	}
	return (
		<div className="mt-36 flex flex-col items-center">
			<h1 className=" font-primary mb-9 text-5xl font-bold text-white">
				Login to Radiance
			</h1>
			{error && (
				<Note
					mb={"12px"}
					type="error"
					label={false}
					filled
					w={"380px"}
					className=" font-primary"
				>
					{error}
				</Note>
			)}

			<div className="mb-3 flex w-80 flex-col gap-2">
				<Button
					onClick={() => {
						signIn("github", {
							callbackUrl: env.NEXT_PUBLIC_CLIENT_BASE_URL,
						})
					}}
					width={"100%"}
				>
					{" "}
					<Github size={16} className="mr-2" />
					Sign in with Github
				</Button>
				<Button
					onClick={() =>
						signIn("google", {
							callbackUrl: env.NEXT_PUBLIC_CLIENT_BASE_URL,
						})
					}
					width={"100%"}
				>
					<Image
						src="/faang/google.png"
						width={16}
						className="mr-2"
						height={16}
						alt="google image"
					/>
					Sign in with Google
				</Button>
				<Button
					onClick={() => {
						signIn("discord", {
							callbackUrl: env.NEXT_PUBLIC_CLIENT_BASE_URL,
						})
					}}
					width={"100%"}
				>
					<Image
						src="/faang/dis.png"
						width={16}
						className="mr-2"
						height={16}
						alt="dicord image"
					/>
					Sign in with Discord
				</Button>
			</div>
			<Divider w={"20rem"} className=" opacity-50">
				OR
			</Divider>
			<Input
				onKeyDown={e => {
					handleSignInEmail(e)
				}}
				className="my-3"
				w={"20rem"}
				placeholder="Email Adress"
			/>
			<Link href="/signup" color underline>
				Don&apos;t have an account? Sign Up &rarr;
			</Link>
		</div>
	)
}

//refactor to custom hook if used in multiple places
const ErrorHandler = (error: string) => {
	//TODO: Add a way to handle errors using router.query.error
	if (error === "OAuthAccountNotLinked") {
		return "The email on this account is already linked, but not with this OAuth account. Sign in with the same OAuth account you used before"
	}
}
