import { motion } from 'framer-motion';
import { useRef } from 'react';

export const NavBar = () => {
	return (
		<nav>
			<a href="/" className="nav-icon">
				<img src="/home-icon.svg" height={40} />
			</a>
			<a href="/payments" className="nav-icon">
				<img src="/payments-icon.svg" height={38} />
			</a>
			<a href="/pictures" className="nav-icon">
				<img src="/camera-icon.svg" height={38} />
			</a>
			<a href="/music" className="nav-icon">
				<img src="/music-note-icon.svg" height={38} />
			</a>
			<a href="/info" className="nav-icon">
				<img src="/info-icon.svg" height={38} />
			</a>
		</nav>
	);
};

export const AnimMain = ({ children }: { children?: React.ReactNode }) => (
	<motion.main
		initial={{ filter: 'blur(10px)', opacity: 0 }}
		animate={{ filter: 'blur(0px)', opacity: 1 }}
		exit={{ filter: 'blur(10px)', opacity: 0 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</motion.main>
);

export const AnimFooter = ({ children }: { children?: React.ReactNode }) => (
	<motion.footer
		initial={{ filter: 'blur(10px)', opacity: 0 }}
		animate={{ filter: 'blur(0px)', opacity: 1 }}
		exit={{ filter: 'blur(10px)', opacity: 0 }}
		transition={{ duration: 0.5 }}
	>
		{children}
	</motion.footer>
);

export const AudioPlayer = ({ src }: { src: string }) => {
	const audioPlayer = useRef<HTMLAudioElement>(null);

	const slider = useRef<HTMLInputElement>(null);

	const playerIcon = useRef<HTMLImageElement>(null);

	const playAudio = () => {
		if (!audioPlayer.current?.paused) {
			audioPlayer.current?.pause();
		} else {
			const audioPlayers = document.querySelectorAll('audio');

			audioPlayers.forEach((player) => {
				player.pause();
			});

			audioPlayer.current?.play();
		}
	};

	const goToTime = () => {
		if (audioPlayer.current) {
			const value = slider.current?.valueAsNumber;

			audioPlayer.current.currentTime =
				((value as number) * audioPlayer.current.duration) / 100;
		}
	};

	const fade = [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }];

	const fadeTiming = {
		duration: 200,
		iterations: 1,
	};

	const changePlayerIcon = async () => {
		if (!audioPlayer?.current?.paused && playerIcon.current) {
			playerIcon.current.animate(fade, fadeTiming);
			setTimeout(() => {
				if (playerIcon.current) {
					playerIcon.current.src = 'pause-icon.svg';
				}
			}, 100);
		}
		if (audioPlayer?.current?.paused && playerIcon.current) {
			playerIcon.current.animate(fade, fadeTiming);
			setTimeout(() => {
				if (playerIcon.current) {
					playerIcon.current.src = 'play-icon.svg';
				}
			}, 100);
		}
	};

	setInterval(() => {
		if (slider.current && audioPlayer.current) {
			slider.current.value = (audioPlayer.current?.currentTime *
				((100 /
					audioPlayer.current
						.duration) as unknown as number)) as unknown as string;
		}
	}, 1000);

	return (
		<div className="audio-player">
			<audio
				src={src}
				preload="metadata"
				ref={audioPlayer}
				onPlay={changePlayerIcon}
				onPause={changePlayerIcon}
			/>
			<img
				src="play-icon.svg"
				height={50}
				style={{ cursor: 'pointer' }}
				onClick={playAudio}
				ref={playerIcon}
			/>
			<input type="range" ref={slider} onInput={goToTime} defaultValue={0} />
		</div>
	);
};
