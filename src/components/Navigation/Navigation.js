import React from 'react';
const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        isSignedIn
            ? <nav style={{ display:'flex', justifyContent:'flex-end', paddingRight:'15px', position: 'relative', zIndex: 0 }}>
                <p className='f3 link dim black underline pa3 pb0 pr1 pointer'
                    onClick={() => onRouteChange('signout')}>
                    Sign Out</p>
            </nav>
            : <nav style={{ display:'flex', justifyContent:'flex-end',paddingRight:'15px', position: 'relative', zIndex: 0}}>
                <p className='f3 link dim black underline pa3 pb0 pr1 pointer'
                    onClick={() => onRouteChange('signin')}>
                    Sign In</p>
                <p className='f3 link dim black underline pa3 pb0 pr0 pointer'
                    onClick={() => onRouteChange('register')}>
                    Register</p>
            </nav>
    );
}

export default Navigation;