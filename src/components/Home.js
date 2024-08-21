import React from 'react';
import FeaturesDrops from './FeaturesDrops';
import Hero from './Hero';
import Benefits from './Benefits';
import Partners from './Partners';
import Collections from './Collections';
import CursorEffectComponent from './CursorEffectComponent';


const Home = () => {
    return (
        <div className='wrapper'>
            <CursorEffectComponent/>
            <Hero/>
            <FeaturesDrops/>
            <Benefits/>
            <Collections/>
            <Partners/>
        </div>
    );
};

export default Home;