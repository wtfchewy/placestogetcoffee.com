import { useState } from 'react';
import {submitShop} from '../services/firestore';
import Close from './Close';

const Menu = ({ setMenu }) => {
    const [social, setSocial] = useState('')
    const [suggestedSong, setSuggestedSong] = useState('')
    const [shopName, setShopName] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [description, setDescription] = useState('')

    const submit = async () => {
        if (!social || !suggestedSong || !shopName || !city || !country || !description) {
            alert('Please fill out all fields')
            return
        }
        await submitShop(social, suggestedSong, shopName, city, country, description);
        setMenu(false);
    }

    return (
        <div className='absolute w-full h-screen bg-mcqueen/30 flex justify-center items-center'>
        <div className='w-2/6 p-2 bg-white border-2 border-mcqueen text-mcqueen'>
          <div className='justify-between flex flex-row'>
          <h1 className='text-xl'>About You</h1>
          <button onClick={() => setMenu(false)} className='text-xl'>
            <Close />
          </button>
          </div>
          <div className='w-full flex flex-row justify-between border-b border-sally'>
            <label className='mt-2'>
              <p className='text-sm'>Your Social</p>
              <input value={social} onChange={(e) => setSocial(e.target.value)} className='px-2 py-1 border bg-white border-mcqueen placeholder-sally text-sm' placeholder='https://' type="text" />
            </label>

            <label className='mt-2 mb-5'>
              <p className='text-sm'>Suggested song</p>
              <input value={suggestedSong} onChange={(e) => setSuggestedSong(e.target.value)} className='px-2 py-1 border bg-white border-mcqueen placeholder-sally text-sm' placeholder='Sexy Back - Justin Timberlake' type="song" />
            </label>
          </div>

          <div className='w-full flex flex-col mt-3'>
            <h1 className='text-xl'>The Shop</h1>
            <label className='mt-2'>
              <p className='text-sm'>Name</p>
              <input value={shopName} onChange={(e) => setShopName(e.target.value)} className='w-full px-2 py-1 border bg-white border-mcqueen placeholder-sally text-sm' placeholder='The Bean' type="locationName" />
            </label>

            <div className='flex flex-row justify-between'>
              <label className='mt-2'>
                <p className='text-sm'>City</p>
                <input value={city} onChange={(e) => setCity(e.target.value)} className='px-2 py-1 border bg-white border-mcqueen placeholder-sally text-sm' placeholder='Overland Park' type="city" />
              </label>
              <label className='mt-2'>
                <p className='text-sm'>Country</p>
                <input value={country} onChange={(e) => setCountry(e.target.value)} className='px-2 py-1 border bg-white border-mcqueen placeholder-sally text-sm' placeholder='United States' type="country" />
              </label>
            </div>

            <label className='mt-2'>
              <p className='text-sm'>Describe the shop (encouraged for a submission)</p>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className='w-full px-2 py-1 border bg-white border-mcqueen placeholder-sally text-sm' placeholder='In your own words, a amazing coffee shop.' type="text" />
            </label>
          </div>

          <button onClick={() => submit()} className='w-full mt-2 px-2 py-1 bg-mcqueen text-white'>
            Submit
          </button>
        </div>
      </div>
    );
}

export default Menu;