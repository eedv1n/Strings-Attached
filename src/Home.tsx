import * as Elements from './Elements';

function Home() {
	return (
		<Elements.animMain>
			<h1 className="title">Strings Attached</h1>

			<h3 style={{ marginBottom: '20px' }}> - en Uppsalakvartett</h3>
			<div
				className="divider"
				style={{ marginBottom: '20px', width: '50px' }}
			/>
			<img src="pic1.jpg" className="picture" height={'30%'} />
			<p>
				Med en bred repertoar höjer vi stämningen på bröllop, fester & andra
				event.
			</p>
		</Elements.animMain>
	);
}

export default Home;
