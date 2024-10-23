import { useState, useEffect } from 'react'
import Entry from './components/Entry'
import Hero from './components/Hero'
import Menu from './components/Menu'
import { getShops } from './services/firestore'

function App() {
  const [entries, setEntries] = useState([])
  const [filteredEntries, setFilteredEntries] = useState([])
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [loading, setLoading] = useState(true)
  const [menu, setMenu] = useState(false)

  const getDistanceFromLatLonInMiles = (lat1, lon1, lat2, lon2) => {
    const deg2rad = (deg) => deg * (Math.PI / 180)
    const R = 3959
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c // distance in miles
    return distance
  }

  const setLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const shops = await getShops();
        setEntries(shops);
        setLocation();
      } catch (error) {
        console.error('Error fetching shops:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const filtered = entries.filter((entry) => {
        const distance = getDistanceFromLatLonInMiles(
          latitude,
          longitude,
          entry.latitude,
          entry.longitude
        );
        return distance <= 50;
      });
      setFilteredEntries(filtered);
    }
  }, [latitude, longitude, entries]);

  if (loading) {
    return (
      <div className='flex flex-col w-full h-screen justify-center items-center'>
        <div className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-mcqueen border-t-transparent"></div>
      </div> 
    )
  }

  return (
    <div className='flex flex-col isolate min-h-full '>
      {menu && <Menu setMenu={setMenu} />}

      <header className="text-mcqueen justify-between w-full px-4 pt-12 pb-16 mx-auto sm:flex max-w-screen-2xl">
        <Hero />
        <div>
          <button onClick={() => setMenu(true)} className='px-2 py-1 border border-mcqueen hover:bg-mcqueen hover:text-white transition duration-75'>
            Submit a Coffee Shop
          </button>
        </div>
      </header>

      <table className="w-full text-left table-auto min-w-max mt-5 overflow-hidden">
        <thead>
            <tr className="text-mcqueen border-b-2 border-mcqueen">
                <th className="px-4 py-2 text-xl font-medium leading-none"></th>
                <th className="px-4 py-2 text-xl font-medium leading-none">Coffee Shop</th>
                <th className="px-4 py-2 text-xl font-medium leading-none">City</th>
                <th className="px-4 py-2 text-xl font-medium leading-none">Rating</th>
                <th className="px-4 py-2 text-xl font-medium leading-none">Notable Feature</th>
                <th className="px-4 py-2 text-xl font-medium leading-none">Map</th>
            </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry, index) => (
            <Entry key={entry.id} index={index + 1} name={entry.name} city={entry.city} rating={entry.rating} feature={entry.feature} latitude={entry.latitude} longitude={entry.longitude} url={entry.link}/>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default App
