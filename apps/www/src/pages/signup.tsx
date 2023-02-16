import { env } from "@/env/client.mjs"
import { Input, Link } from "@geist-ui/core"
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
				Sign up to Radiance
			</h1>

			<Input
				onKeyDown={e => {
					handleSignInEmail(e)
				}}
				className="my-3"
				w={"20rem"}
				placeholder="Email Adress"
			/>
			<Link href="/signin" color underline>
				&larr; already have an account?
			</Link>
		</div>
	)
}
