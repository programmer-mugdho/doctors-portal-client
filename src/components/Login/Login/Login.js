import React, { useContext } from 'react';
import LoginBg from '../../../images/loginBg.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser)
            storeAuthToken()
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    const storeAuthToken = ()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken)
            history.replace(from)
        }).catch(function (error) {
            // Handle error
        });
    }

    return (
        <div className='container'>
            <div className="row align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-6 shadow p-5 rounded">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className='text-danger'>Forgot your password?</label>
                    </div>
                    <div className="form-group">
                        <button onClick={handleSignIn} className="btn btn-brand mt-5">Google Sign In</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img src={LoginBg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Login;
