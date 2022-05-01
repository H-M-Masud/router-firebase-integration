import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {getAuth} from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin:'20px'}}>
                <button onClick={() =>signInWithGoogle()}>Google sign In</button>
            </div>
            <form>
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" name="" placeholder='password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;