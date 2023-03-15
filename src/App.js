import { useEffect, useState } from 'react';
import './App.css';
import Loader from './Loader';
import Events from './pages/EventsPage/events';
import Footer from './pages/Footer/footer';
import Home from './pages/HomePage/home';
import NavBar from './pages/Navbar/navbar';
import Schedule from './pages/SchedulePage/schedule';
import Sponsors from './pages/SponsorsPage/sponsors';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 4000);
    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
		<>
			{!loaded ? (
				<Loader />
			) : (
				<div className="App">
					<NavBar />
					<Home />
					<Events />
					<Sponsors />
					<Schedule />
					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
