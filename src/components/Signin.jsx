import { IonButton, IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, useIonToast } from "@ionic/react";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import photo from '../components/assets/SignIn.png';
import { useState, useEffect } from "react";
import './Forms.css';
import { auth, db } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router-dom';

export const SignIn = () => {
    const [values, setValues] = useState({showPassword: false});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast] = useIonToast();
    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    const SignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth, 
            email, 
            password
        ).then((userCredentials) => {
            const user = userCredentials.user;
            history.push('/dashboard');
            showToast({ message : ' Welcome Back', duration: [4000]});
        }).catch((error) => {
            showToast({message: 'Invalid Credentials Entered', duration: [4000]});
        })
    }
    

    // useEffect(() => {
    //     if (loading) {
    //       return;
    //     }
    //     if (user) history.push("/dashboard");
    //   }, [user, loading]);


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    return(
        <IonPage>
            <IonContent className="ion-padding">
                <div className="illustration">
                    <div className="image">
                        <img className="photo" src={photo} alt="" />
                    </div>
                </div>
                <IonGrid>
                    <IonRow>
                    <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>
                        <div className='welcome-section ion-padding'>
                            <div className='heading ion-padding'>
                                <h2>Welcome Back</h2>
                                <p>Sign In To Continue</p>
                            </div>
                                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '325px' },}}
                                noValidate
                                autoComplete="off"
                                className="inputs"
                                >
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <OutlinedInput
                                        id="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        label="Email"
                                    />
                                    </FormControl>

                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        type={values.showPassword ? 'text' : 'password' }
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            onChange={handleChange('password')}
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                    </FormControl>

                                    <div className='register'>
                                        <a href="/passwordReset">Forgot Password</a>
                                    </div>
                                </Box>

                                <div className='action'>
                                <div className='login-btn'>
                                    <IonButton className="login-btn" onClick={SignIn} >Sign In</IonButton>
                                </div>
                                    
                                <div className='register'>
                                    <p className="register-link">Don't Have An Account?<span>&nbsp;</span><a href="/signup">Sign Up</a></p>
                                </div>
                            </div>

                        </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}