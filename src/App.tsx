import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import * as Components from './Components';
import { useEffect, useRef } from 'react';

function App() {
	const cursorGlow = useRef<HTMLDivElement>(null);

	const handleMouseMovement = (e: MouseEvent) => {
		const main: HTMLElement = document.getElementsByTagName('main')[0];

		if (cursorGlow.current && !window.matchMedia('(pointer: coarse)').matches) {
			cursorGlow.current.style.left =
				e.clientX - cursorGlow.current.offsetWidth / 2 + 'px';
			cursorGlow.current.style.top =
				e.clientY - cursorGlow.current.offsetHeight / 2 + 'px';

			main.style.transform = `translateX(${
				((e.clientX - main.offsetWidth / 2) / 50).toString() + 'px'
			}) translateY(${
				((e.clientY - main.offsetHeight / 2) / 50).toString() + 'px'
			})`;
		}
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMovement);

		return () => {
			window.removeEventListener('mousemove', handleMouseMovement);
		};
	});

	return (
		<BrowserRouter key={location.pathname}>
			<div id="cursor-glow" ref={cursorGlow} />
			<Components.NavBar />
			<AnimatedRoutes />
			<Components.AnimFooter>
				<div className="divider" />
				<div id="footer-content">
					<p style={{ margin: 0, marginBottom: '10px' }}>
						Strings Attached - en Uppsalakvartett
					</p>
					<div id="footer-refferals">
						<a
							href="https://www.facebook.com/p/Strings-attached-en-Uppsalakvartett-100035516457059/?paipv=0&eav=AfYLfP_NTVfy2kkaQFu0d7jmtlzKlYpCdySnfVdpeLecFDEkr_j3AwFmcFehftz0DvQ&_rdr"
							target="_blank"
						>
							Facebook
						</a>
						<a
							href="https://www.instagram.com/strings_attached_strakkvartett/"
							target="_blank"
						>
							Instagram
						</a>
					</div>
				</div>
			</Components.AnimFooter>
		</BrowserRouter>
	);
}

export default App;
