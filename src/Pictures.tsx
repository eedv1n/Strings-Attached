import * as Elements from './Elements';

function Pictures() {
	return (
		<Elements.AnimMain>
			<h1 className="title">Bilder</h1>
			<div className="pictures">
				<img src="pic2.jpg" className="picture" height={'90%'} />
				<img src="pic5.jpg" className="picture" height={'90%'} />
				<img src="pic3.jpeg" className="picture" height={'90%'} />
				<img src="pic4.jpg" className="picture" height={'90%'} />
			</div>
		</Elements.AnimMain>
	);
}

export default Pictures;
