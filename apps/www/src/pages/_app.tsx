import { GeistProvider } from "@geist-ui/core"
import { Inter } from "@next/font/google"

import { NavigationMenu } from "@/components/NavBar"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { type AppType } from "next/app"
import "../styles/globals.css"
import { api } from "../utils/api"

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "900"],
})
const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<style jsx global>
				{`
					:root {
						--inter-font: ${inter.style.fontFamily};
					}
				`}
			</style>
			<GeistProvider themeType="dark">
				{/* <CssBaseline /> */}
				<NavigationMenu />
				<Component {...pageProps} />
			</GeistProvider>
		</SessionProvider>
	)
}

export default api.withTRPC(MyApp)
