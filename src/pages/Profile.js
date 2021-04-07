import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserProfile from '../components/UserProfile';

import data from "../misc/data.json";



const Profile = () => {
    const { username } = useParams();

    const [user, setUser] = useState({});

    const canShowUser = user && user !== {};

    useEffect(() => {
        setUser(data.find(user => user.name === username));
    }, [username]);
    return (
        <div>
            {!canShowUser &&
                <p>Not found</p>
            }

            {canShowUser && <UserProfile data={user} />}
        </div>
    )
}

export default Profile
