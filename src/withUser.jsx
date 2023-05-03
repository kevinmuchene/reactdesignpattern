import React, { useState, useEffect } from 'react';

export const withUser = (Component, userId) => {
  return (props) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:8080/users/${userId}`);
            const data = await response.json();
            setUserData(data);
        })();
    }, [userId]);
    return <Component {...props} user={userData} />;
  };
}