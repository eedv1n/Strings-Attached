import { useEffect, useRef } from 'react';
import * as Components from './Components';

function Pictures() {
	const pictureTrack = useRef<HTMLDivElement>(null);

	let animationId: number;

	useEffect(() => {});

	useEffect(() => {
		const stylePictureTrack = () => {
			if (pictureTrack.current) {
				if (
					pictureTrack.current.scrollWidth <= pictureTrack.current.offsetWidth
				) {
					pictureTrack.current.style.justifyContent = 'center';
				} else {
					pictureTrack.current.style.justifyContent = 'start';
				}
			}
		};

		const animate = () => {
			stylePictureTrack();
			// eslint-disable-next-line react-hooks/exhaustive-deps
			animationId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			cancelAnimationFrame(animationId);
		};
	});

	return (
		<Components.AnimMain>
			<h1 className="title">Bilder</h1>
			<div className="picture-track" ref={pictureTrack}>
				<img src="pic2.jpg" className="picture" height={'90%'} />
				<img src="pic5.jpg" className="picture" height={'90%'} />
				<img src="pic3.jpeg" className="picture" height={'90%'} />
				<img src="pic4.jpg" className="picture" height={'90%'} />
			</div>
		</Components.AnimMain>
	);
}

export default Pictures;
