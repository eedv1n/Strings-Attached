import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Payments from './Payments';
import Info from './Info';
import Pictures from './Pictures';
import Music from './Music';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path="/payments" element={<Payments />} />
				<Route path="/info" element={<Info />} />
				<Route path="/pictures" element={<Pictures />} />
				<Route path="/music" element={<Music />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
