import React from 'react';
import Slideshow from './Slideshow.js';
import './Home.css'

function Home() {
  return (
    <div>

        {/* M   A   R   Q   U   E   E        T   E   X   T */}
        <marquee className="moving-text" width="100%" direction="left" height="100px">
        A D M I S S I O N S  &nbsp; &nbsp;   O P E N &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; W E ' R E &nbsp; &nbsp; H I R I N G&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B R O C H U R E
      </marquee>

      {/* S   L   I   D   E   S   H   O   W */}

      <Slideshow />

      {/* S   C   R   O   L   L      D   O   W   N      A   R   R   O   W */}
      <div className='scroll-down-arrow'>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* T   A   G   L   I   N   E */}
      <div className='school-tagline'>
        Knowledge&nbsp;&nbsp;is&nbsp;&nbsp;Power
      </div>




    </div>
  )
}

export default Home