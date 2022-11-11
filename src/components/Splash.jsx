import { IonButton, IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useHistory } from "react-router";
import { useCallback}  from 'react';
import photo from '../components/assets/Welcome.png'
import './Splash.css';

export const Splash = () => {

    const history = useHistory();

    const onSignIn = useCallback(() => {
        history.push("/signIn");
      }, [history]);
    
      const onSignUp = useCallback(() => {
        history.push("/signUp");
      }, [history]);


    return(
        <IonPage>
            <IonContent className='background ion-padding'>
                <IonGrid fixed>
                    <IonRow>
                        <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>
                        <div className='welcome-section ion-padding'>
                            <div className="illustration">
                                <div className="image">
                                    <img className="photo" src={photo} alt="" />
                                </div>
                            </div>
                            <div className='heading ion-padding'>
                                <h2>Be More Social.</h2>
                                <p>You Can Find Recipes For Your Favorite Food.</p>
                                <p>Join The Club. <br></br> Become A Foodie!</p>
                            </div>

                            <div className="action flex-row-hstart-vstart">
                            <div className="login flex-row-vcenter-hcenter">
                                <IonButton className="login-btn" fill="clear" onClick={onSignIn}>Sign In</IonButton>
                            </div>

                            <div className="register-1 flex-row-vcenter-hcenter">
                                <IonButton className="register-btn-1" fill="clear" onClick={onSignUp}>Sign Up</IonButton>
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