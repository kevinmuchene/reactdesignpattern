import { useState, useEffect } from 'react';
import axios from 'axios';

export const withUserEditable = (Component, userId) => {
    console.log(userId)
    return (props) => {

        const [orignalData, setOrignalData] = useState(null);
        const [userData, setUserData] = useState(null);
    
        useEffect(() => {
            (async () => {
                const response = await fetch(`http://localhost:8080/users/${userId}`);
                const data = await response.json();
                setUserData(data);
            })();
        }, [userId]);

        const onChangeUser = changes => {
            setUserData({ ...userData, ...changes });
        };

        const onSaveUser = async () => {
            const response = await axios.post(`http://localhost:8080/users/${userId}`, userData);
            setOrignalData(response.data);
            setUserData(response.data);
        }

        const onResetUser = () => {
            setUserData(orignalData);
        }

             
        return <Component {...props}
         user={userData}
         onChangeUser={onChangeUser}
         onSaveUser = {onSaveUser}
         onResetUser={onResetUser} />;
    };
}