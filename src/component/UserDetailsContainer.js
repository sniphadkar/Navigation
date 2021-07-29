import React, { useContext, useState } from 'react';
import UserContext from './UserDetails';

const LandingComponent = (props) => {
    const { UserDetails,setDetails } = useContext(UserContext);
    const [details, setUserDetails] = useState({
        firstName: UserDetails.firstName,
        lastName: UserDetails.lastName
    })
    const handleChange = (e) => {
        setUserDetails({ ...details, [e.target.id]: e.target.value });
    }
    const updateDetails = () => {
        setDetails(details)
    }
    return (
        <div className='display-Flex'>
            <div className='padding-30'>
                <h1>{`This is "${props.active}" page`}</h1>
            </div>
            {props.active === 'Settings' ? (
                <div className='padding-30'>
                    <div>First Name: <input type='text' value={details.firstName} onChange={handleChange} id={'firstName'} /></div>
                    <div>Last Name: <input type='text' value={details.lastName} onChange={handleChange} id={'lastName'} /></div>
                    <div className={'padding-30 text-right'}>
                        <button onClick={updateDetails}>Update</button>
                    </div>
                </div>
            ):(
                <div className='padding-30'>
                    <div>First Name: {UserDetails.firstName}</div>
                    <div>Last Name: {UserDetails.lastName}</div>
                </div>
            )}
        </div>
    )
}

export default LandingComponent;