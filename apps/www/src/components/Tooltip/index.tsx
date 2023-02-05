import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { clsx } from "clsx"

interface TooltipProps {
	children: React.ReactNode
	content: string
}

const TooltipHelper = ({ children, content }: TooltipProps) => {
	return (
		<TooltipPrimitive.Provider delayDuration={200}>
			<TooltipPrimitive.Root>
				<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Content
					sideOffset={4}
					side="bottom"
					className={clsx(
						"radix-side-top:animate-slide-down-fade",
						"radix-side-right:animate-slide-left-fade",
						"radix-side-bottom:animate-slide-up-fade",
						"radix-side-left:animate-slide-right-fade",
						"inline-flex items-center rounded-md px-4 py-2.5",
						"border bg-white dark:bg-black ",
					)}
				>
					<TooltipPrimitive.Arrow className=" fill-current text-white dark:bg-black" />
					<span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
						{content}
					</span>
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	)
}

export { TooltipHelper }
