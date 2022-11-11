import { IonButton, IonContent, IonPage, IonHeader, IonTitle,useIonToast, IonToolbar, IonGrid, IonRow, IonCol } from "@ionic/react";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import photo from '../components/assets/PasswordReset.png';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { sendPasswordReset } from '../config/firebase';
import { auth } from '../config/firebase';
import './Forms.css';
import { useAuthState } from "react-firebase-hooks/auth";

export const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [showToast] = useIonToast();
    const history = useHistory();
  
    
    useEffect(() => {
        if (loading) return;
        if (user) history.push("/signIn");
      }, [user, loading])

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
                                <h2>Password Reset</h2>
                                <p>Enter Your New Password To Continue</p>
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

                                </Box>

                            <div className="action flex-row-hstart-vstart">
                            <div className="login flex-row-vcenter-hcenter">
                                <IonButton className="login-btn" fill="clear" onClick={sendPasswordReset}>Reset Password</IonButton>
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