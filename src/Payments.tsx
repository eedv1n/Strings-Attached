import * as Components from './Components';
import './Payments.css';

function Payments() {
	return (
		<Components.AnimMain>
			<h1 className="title">Prislista</h1>
			<div className="payment-alternative">
				<h3>Spela under vigsel/in/utgång</h3>
				<p>7000 SEK</p>
			</div>
			<p className="divider" style={{ width: 'fit-content', color: '#96835b' }}>
				...
			</p>
			<div className="payment-alternative">
				<h3>Spela under brudskål/mingel 45 min </h3>
				<p>7000 SEK</p>
			</div>
			<p className="divider" style={{ width: 'fit-content', color: '#96835b' }}>
				...
			</p>
			<div className="payment-alternative">
				<h3>Paketpris vigsel + mingel</h3>
				<p>12 000 SEK</p>
			</div>
			<p className="divider" style={{ width: 'fit-content', color: '#96835b' }}>
				...
			</p>
			<div className="payment-alternative">
				<h3>Reseersättning</h3>
				<p>500 SEK per person</p>
			</div>
		</Components.AnimMain>
	);
}

export default Payments;
