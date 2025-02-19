import * as Components from './Components';

function Music() {
	return (
		<Components.AnimMain>
			<h1 className="title">Musik</h1>
			<Components.AudioPlayer src="https://cdn.pixabay.com/audio/2024/09/29/audio_9a75aacce7.mp3" />
			<Components.AudioPlayer src="https://cdn.pixabay.com/audio/2024/09/29/audio_5c67567261.mp3" />
		</Components.AnimMain>
	);
}

export default Music;
