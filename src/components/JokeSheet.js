import React from 'react';

const JokeSheet = props => {
    return (
        <>
            <div>
                <input value="" />
                <button>Get Data</button>
            </div>
            <div>
                <p>{props.joke}</p>
            </div>
        </>
    )
}

export default JokeSheet;