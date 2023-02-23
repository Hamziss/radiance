export const config = {
	runtime: "experimental-edge",
}
export default function handler() {
	return new Response(
		JSON.stringify({
			message: "Hello from NextJS API routes on the Edge!",
		}),
		{
			status: 200,
			headers: {
				"content-type": "application/json",
				"Cache-Control": "s-maxage=86400",
			},
		},
	)
}
