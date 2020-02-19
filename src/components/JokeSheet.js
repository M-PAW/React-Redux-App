import React from 'react';

const JokeSheet = props => {
    return (
        <>
            <div>
                <input value="" />
                <button>Get Data</button>
            </div>
            <div>
                {
                    props.jokes.map
                }
            </div>
        </>
    )
}

export default JokeSheet;