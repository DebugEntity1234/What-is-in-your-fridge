import { IonButton, IonContent, IonPage, IonHeader, IonGrid, IonRow, IonCol, useIonLoading, useIonToast } from "@ionic/react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import photo from '../components/assets/SignUp.png';
import { useState, useContext, useEffect } from 'react';
import './Forms.css';
import { auth, db } from '../config/firebase';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";


export const SignUp = () => {

    const [values, setValues] = useState({showPassword: false});
    const [email, setEmail] = useState('');
    const [fname, setfName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [loading, error] = useAuthState(auth);
    const [showToast] = useIonToast()
    const navigate = useHistory();

    const history = useHistory();

    const SignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth, 
            email, 
            password
        ).then((userCredentials) => {
            const user = userCredentials.user;
            setDoc(doc(db, 'users', user.uid), {
                email: email,
                fname: fname,
                password: password,
                username: username,
            })
            navigate.push('/signIn')
        })
    }

    // useEffect(() => {
    //     if (loading) return;
    //     if (user) history.push("/signIn");
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
                                <h2>Welcome</h2>
                                <p>Create An Account</p>
                            </div>
                            <Box className='inputs'
                            component="form"
                            sx={{'& > :not(style)': { m: 1, width: '327px' },}}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" label="Name" variant="outlined" value={fname} onChange={(e) => setfName(e.target.value)} />
                            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />

                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
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
                            </Box>
                            <div className="action flex-row-hstart-vstart">
                            <div className="register-1 flex-row-vcenter-hcenter">
                                <IonButton className="register-btn-1" fill="clear" onClick={SignUp} >Sign Up</IonButton>
                            </div>

                            <div className='register'>
                                <p className="register-link">Have An Account?<span>&nbsp;</span><a href="/signIn">Sign In</a></p>
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