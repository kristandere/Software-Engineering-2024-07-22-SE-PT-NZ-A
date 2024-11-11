
import React, { useState } from 'react';

function Emoji() {

    const [isHappy, setIsHappy] = useState(true);

    const toggleMood = () => {
        setIsHappy(!isHappy);
    };

    return (
        <div className="Emoji componentBox">
            <h2>{isHappy ? '😊' : '😢'}</h2> {}
            <button onClick={toggleMood}>Change Mood</button>
        </div>
    );
}

export default Emoji;
