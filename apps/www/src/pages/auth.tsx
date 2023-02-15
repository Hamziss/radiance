import { Button, Divider, Input, Link } from "@geist-ui/core"

export default function SignIn() {
	return (
		<div className="mt-36 flex flex-col items-center">
			<h1 className=" font-primary mb-9 text-5xl font-bold text-white">
				Login to Radiance
			</h1>
			<div className="mb-3 flex w-80 flex-col gap-2">
				<Button width={"100%"}>Sign in with Github</Button>
				<Button width={"100%"}>Sign in with Google</Button>
				<Button width={"100%"}>Sign in with Discord</Button>
			</div>
			<Divider w={"20rem"} className=" opacity-50">
				OR
			</Divider>
			<Input className="  my-3" w={"20rem"} placeholder="Email Adress" />
			<Link href="/signup" color underline>
				Don&apos;t have an account? Sign Up &rarr;
			</Link>
		</div>
	)
}
