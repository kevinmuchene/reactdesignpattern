import React from 'react'
import useCurrentUser from './useCurrentUser'

function UserInfo({userId}) {
   
  const user = useCurrentUser(userId);
    const {name, age, hairColor, hobbies} = user || {};

  return user ? (
    
    <>

        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        
    </>
  ) : <h2>No items available</h2>
}

export default UserInfo