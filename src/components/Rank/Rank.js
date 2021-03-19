import React from 'react';

const Rank = ({ name, entries, boxes }) => {
    return (
        <div className='pv3-l pv2 ph6-l ph3 mt0-l mt5 mw9-l mw5 dib br4 shadow-5'>
            <div className='pt1-l pa0 white f3-l f6'>
                {`${name}, your current entry count is`}
            </div>
            <div className='black f1-l f3 mv3'>
                {entries}
            </div>
            <div className='pt1 white f3-l f6'>
                {
                    boxes.length === 1 
                    ? `${boxes.length} face found in the picture`
                    : `${boxes.length} faces found in the picture`

                }
            </div>
        </div>
    );
}

export default Rank;