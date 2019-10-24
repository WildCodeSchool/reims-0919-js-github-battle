import React from 'react';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import ChooseTheProfile2 from './ChooseTheProfile2';
import Comparison from './Comparison';
import WelcomePage from './WelcomePage';

function CompareTwoProfiles() {
    return (
        <div>
            <WelcomePage />
            <div id="displayResultsDesktop">
                <Profile1 />
                <ChooseTheProfile2 />
                <Comparison />
                <Profile2 />
            </div>
        </div>
    )
}

export default CompareTwoProfiles; 