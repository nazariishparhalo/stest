import React, { useState } from 'react'
import { Auth, AuthInput, AuthSubmitBtn, AuthTitle } from './Login.styled';

import data from "../misc/data.json";
import { useHistory } from 'react-router-dom';


const LogIn = () => {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isShowError, setIsShowError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const user = data.find(user => user.email === email && user.password === password);
        if(user) {
            setIsShowError(false);
            history.push(`/profile/${user.name}`);
        } else {
            setIsShowError(true);
        }

    };

    return (
        <Auth>
            <AuthTitle>Sign In</AuthTitle>
            {isShowError && 
                <p className="login-error">Email or password is incorect</p>
            }
            <form onSubmit={e => handleSubmit(e)} >
                <AuthInput>
                    <div>
                        <label>Email Address</label>
                    </div>
                    <div>
                        <input type="text" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                </AuthInput>
                <AuthInput>
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </AuthInput>
                <AuthSubmitBtn>
                    <input type='submit' className="btn-blue" value="Sign In" />
                </AuthSubmitBtn>
            </form>
        </Auth>
    )
}

export default LogIn
