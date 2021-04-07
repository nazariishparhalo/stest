import userEvent from '@testing-library/user-event'
import React from 'react'
import { UserProfileStyled } from './UserProfile.styled'

const UserProfile = ({data}) => {
    return (
        <UserProfileStyled>
            <h3>Username: {data.name}</h3>
            <p>Email: {data.email}</p>
        </UserProfileStyled>
    )
}

export default UserProfile
