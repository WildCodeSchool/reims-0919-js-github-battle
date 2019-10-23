import React from 'react';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Comparison from './Comparison';
import WelcomePage from './WelcomePage';

function CompareTwoProfiles() {
    return (
        <div>
            <WelcomePage />
            <Profile1 />
            <Comparison />
            <Profile2 />
        </div>
    )
}

export default CompareTwoProfiles; 