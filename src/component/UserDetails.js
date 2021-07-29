import React from 'react';
  
const UserContext = React.createContext({UserDetails:'',setDetails: () => {}});
  
export default UserContext;