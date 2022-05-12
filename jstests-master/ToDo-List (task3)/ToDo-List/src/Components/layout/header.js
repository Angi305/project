import React from 'react';
import {Link} from 'react-router-dom'




function Header(){
    return (

        <header >
            <Link style={Hstyle} to='/'>HOME</Link>
        </header>
    )
}




export default Header;




const Hstyle={
    padding: `10px`,
    textAlign:`center`,
    color: `white`,
    textShadow: `1px 1px black `,
}
