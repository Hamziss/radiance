import createGlobe from "cobe"
import { LegacyRef, useEffect, useRef } from "react"
import { useSpring } from "react-spring"

export function Cobe() {
	const canvasRef = useRef<HTMLCanvasElement>()
	const pointerInteracting = useRef<number | null>(0)
	const pointerInteractionMovement = useRef(0)
	const [{ r }, api] = useSpring(() => ({
		r: 0,
		config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
	}))
	useEffect(() => {
		let phi = 0
		let width = 0
		const onResize = () =>
			canvasRef.current && (width = canvasRef.current.offsetWidth)
		window.addEventListener("resize", onResize)
		onResize()
		const globe = createGlobe(canvasRef.current as HTMLCanvasElement, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: 0,
			theta: 0.3,
			dark: 1,
			scale: 0.7,
			diffuse: 3,
			offset: [0, 1380],
			mapSamples: 16000,
			mapBrightness: 1.2,
			baseColor: [1, 1, 1],
			markerColor: [251 / 255, 100 / 255, 21 / 255],
			glowColor: [1.2, 1.2, 1.2],
			markers: [],
			onRender: state => {
				if (!pointerInteracting.current) {
					// Called on every animation frame.
					// state will be an empty object, return updated params.
					phi += 0.005
				}
				state.phi = phi + r.get()
				state.width = width * 2
				state.height = width * 2
			},
		})
		setTimeout(() =>
			canvasRef.current ? (canvasRef.current.style.opacity = "1") : null,
		)
		return () => globe.destroy()
	}, [r])
	return (
		<div className="relative mx-auto aspect-[2.2] w-screen max-w-xl">
			<canvas
				ref={canvasRef as LegacyRef<HTMLCanvasElement> | undefined}
				onPointerDown={e => {
					pointerInteracting.current =
						e.clientX - pointerInteractionMovement.current
					if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
				}}
				onPointerUp={() => {
					pointerInteracting.current = null
					if (canvasRef.current) canvasRef.current.style.cursor = "grab"
				}}
				onPointerOut={() => {
					pointerInteracting.current = null
					if (canvasRef.current) canvasRef.current.style.cursor = "grab"
				}}
				onMouseMove={e => {
					if (pointerInteracting.current !== null) {
						const delta = e.clientX - pointerInteracting.current
						pointerInteractionMovement.current = delta
						api.start({ r: delta / 200 })
					}
				}}
				onTouchMove={e => {
					if (pointerInteracting.current !== null && e.touches[0]) {
						const delta = e.touches[0].clientX - pointerInteracting.current
						pointerInteractionMovement.current = delta
						api.start({ r: delta / 100 })
					}
				}}
				style={{
					width: "100%",
					height: "100%",
					cursor: "grab",
					contain: "layout paint size",
					opacity: 0,
					transition: "opacity 1s ease",
				}}
			/>
		</div>
	)
}
