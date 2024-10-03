import { useEffect, useRef } from 'react';
import * as Elements from './Elements';

function Pictures() {
	const pictures = useRef<HTMLDivElement>(null);

	let animationId: number;

	useEffect(() => {
		const checkOverflow = () => {
			if (pictures.current) {
				if (pictures.current.scrollWidth <= pictures.current.offsetWidth) {
					pictures.current.style.justifyContent = 'center';
					console.log('Not overflowing');
				} else {
					pictures.current.style.justifyContent = 'start';
					console.log('Overflowing');
				}
			}
		};

		const animate = () => {
			checkOverflow();
			// eslint-disable-next-line react-hooks/exhaustive-deps
			animationId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			cancelAnimationFrame(animationId);
		};
	});

	return (
		<Elements.AnimMain>
			<h1 className="title">Bilder</h1>
			<div className="pictures" ref={pictures}>
				<img src="pic2.jpg" className="picture" height={'90%'} />
				<img src="pic5.jpg" className="picture" height={'90%'} />
				<img src="pic3.jpeg" className="picture" height={'90%'} />
				<img src="pic4.jpg" className="picture" height={'90%'} />
			</div>
		</Elements.AnimMain>
	);
}

export default Pictures;
