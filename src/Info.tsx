import * as Components from './Components';
import './Info.css';

function Info() {
	return (
		<Components.AnimMain>
			<h1 className="title">Info</h1>
			<div className="text-box">
				<p>
					Vi är 4 vänner som träffades genom Norrlands Nations salongsorkester i
					början av 2000-talet och har funnits som kvartett i drygt 15 år.
				</p>
				<p>
					Vår repertoar har växt genom åren, mycket på grund av roliga önskemål
					från kunder och vi har nu en bredd med både klassiskt, folkmusik och
					popmusik. Vi jobbar allihop med annat än musik till vardags och spelar
					ihop för att det är roligt!
				</p>
				<ul>
					<li>Isabella Marin - Violin 1</li>
					<li>Catherine Duarte Martins - Violin 2</li>
					<li>Åsa Neuman - Viola</li>
					<li>Erik Salmonsson - Cello</li>
				</ul>
			</div>
		</Components.AnimMain>
	);
}

export default Info;
