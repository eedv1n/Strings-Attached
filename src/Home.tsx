import * as Components from './Components';

function Home() {
	return (
		<Components.AnimMain>
			<h1 className="title">Strings Attached</h1>

			<h3 style={{ marginBottom: '20px' }}> - en Uppsalakvartett</h3>
			<div
				className="divider"
				style={{ marginBottom: '20px', width: '50px' }}
			/>

			<div style={{ height: '30vh', display: 'flex', alignItems: 'center' }}>
				<img src="pic1.jpg" className="picture" />
			</div>
			<p>
				Med en bred repertoar höjer vi stämningen på bröllop, fester & andra
				event.
			</p>
		</Components.AnimMain>
	);
}

export default Home;
