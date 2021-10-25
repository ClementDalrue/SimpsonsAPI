import React from 'react';


function Displaysims({ sims }) {

  return (

    sims && (

      <div className='Displaysims'>

        <img src={sims.image} alt={sims.character} />

        <ul>

          <li>Character: {sims.character}</li>
          <li>Quote: {sims.quote}</li>
          <li>Direction : {sims.characterDirection}</li>

        </ul>

      </div>

    )

  );

}


export default Displaysims;