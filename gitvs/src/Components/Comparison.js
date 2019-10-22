import React from 'react';
import './Profile1Phone.css';
import ButtonAppearResults from './ButtonAppearResults';

const Comparison = () => 
    <div id="comparison">
        <div className='VS-phone'>
            <figure>
                <img className="avatar-result" src={"https://avatars3.githubusercontent.com/u/54673312?v=4"} />
                <h5>{'Maxime-Thibaud'}</h5>            
            </figure>
            <h2>VS</h2>
            <figure>
                <img className="avatar-result" src={"https://avatars2.githubusercontent.com/u/8034782?v=4"} />
                <h5>{'Aloxbro'}</h5>            
            </figure>
        </div>
        <div>
            <p id='results-phone'>Résultats</p>
        </div>
        <button type="button" value="Masquer" onClick={event => ButtonAppearResults('results-phone')}>Résults !</button> 
    </div>

export default Comparison; 
