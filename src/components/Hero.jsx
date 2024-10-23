import { useState } from 'react';
import Arrow from './Arrow';

const Hero = () => {
    const [isAbout, setIsAbout] = useState(false);

    return (
        <div>
            <h1 className="font-medium text-5xl">
                <a href="/">Places to get Coffee</a>
            </h1>
            {!isAbout ?
                <p className="max-w-md mt-1">
                Coffee Shops around your area (50 miles) handpicked by the internet that are perfect to
                sit down in and enjoy a coffee.
                </p>
            :
                <p className="max-w-md mt-1">
                This is a project that was created to help people find coffee shops around their area.
                The data is handpicked by the internet and is perfect to sit down in and enjoy a coffee.
                </p>
            }
            {!isAbout ? 
                <button onClick={() => setIsAbout(true)} className="flex items-center mt-4 gap-x-1 w-fit">
                    About
                    <Arrow />
                </button>
            :
                <button onClick={() => setIsAbout(false)} className="flex items-center mt-4 gap-x-1 w-fit">
                    Back
                </button>
            }
        </div>
    );
}

export default Hero;