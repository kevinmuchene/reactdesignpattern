import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useCurrentUser({id}) {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:8080/users/"+id);
            console.log(response.data);
            setCurrentUser(response.data);
        })();
    }, [id]);


  return currentUser;
}

export default useCurrentUser