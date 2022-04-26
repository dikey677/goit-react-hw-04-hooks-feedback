import React from 'react'

const FeedbackOptions = ({onIncrGood, onIncrNeutral, onIncrBad}) => {
    return (
        <div>
            <ul>
                <li><button type='button' onClick={onIncrGood}>Good</button></li>
                <li><button type='button' onClick={onIncrNeutral}>Neutral</button></li>
                <li><button type='button' onClick={onIncrBad}>Bad</button></li>
            </ul>
        </div>
    );
};

export default FeedbackOptions 