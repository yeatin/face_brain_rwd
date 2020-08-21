import React from 'react';

const Rank = ( { name, entries }) => {
    return (
        <div className='pv3 ph6 mw9 dib br4 shadow-5'>
            <div className='pt1 white f3'>
                {`${name}, your current entry count is`}
            </div>
            <div className='black f1 mt3'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;