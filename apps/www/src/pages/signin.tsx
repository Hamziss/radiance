import { env } from "@/env/client.mjs"
import { Button, Divider, Input, Link } from "@geist-ui/core"
import { signIn } from "next-auth/react"

export default function SignIn() {
	const handleSignInEmail = async (
		e: React.KeyboardEvent<HTMLInputElement>,
	) => {
		console.log("in")
		if (e.key === "Enter") {
			const res = await signIn("email", {
				email: e.currentTarget.value,
				callbackUrl: env.NEXT_PUBLIC_CLIENT_BASE_URL,
				redirect: false,
				role: "user",
			})
			console.log(res)
		}
	}
	return (
		<div className="mt-36 flex flex-col items-center">
			<h1 className=" font-primary mb-9 text-5xl font-bold text-white">
				Login to Radiance
			</h1>
			<div className="mb-3 flex w-80 flex-col gap-2">
				<Button
					onClick={() => {
						signIn("github", {
							callbackUrl: env.NEXT_PUBLIC_CLIENT_BASE_URL,
						})
					}}
					width={"100%"}
				>
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
