import * as Elements from './Elements';

function Music() {
	return (
		<Elements.AnimMain>
			<h1 className="title">Musik</h1>
			<Elements.AudioPlayer src="https://cdn.pixabay.com/audio/2024/09/29/audio_9a75aacce7.mp3" />
			<Elements.AudioPlayer src="https://cdn.pixabay.com/audio/2024/09/29/audio_5c67567261.mp3" />
		</Elements.AnimMain>
	);
}

export default Music;
