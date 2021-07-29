import React, { useState } from 'react';
import UserDetailsContainer from './UserDetailsContainer';
import LeftNav from './LeftNav';
import UserDetailsContext from './UserDetails';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';


const LandingComponent = () => {
    const [UserDetails, setDetails] = useState({ firstName: 'James', lastName: 'Bond' });
    const value = { UserDetails, setDetails };
    const [active, setActive] = useState('Home')
    const handleClick = (id) => {
        setActive(id)
    }
    return (
        <UserDetailsContext.Provider value={value}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" onClick={() => handleClick('Home')}>
                    Home
                </Link>
                <Typography color="textPrimary">{active}</Typography>
            </Breadcrumbs>
            <div className='display-Flex'>
                <LeftNav handleClick={handleClick} />
                <UserDetailsContainer active={active} />
            </div>
        </UserDetailsContext.Provider>
    )

}

export default LandingComponent;