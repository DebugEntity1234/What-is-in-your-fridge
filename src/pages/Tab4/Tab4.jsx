import { IonFabButton,  IonFab, IonButtons, useIonToast, IonImg, IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonGrid, IonIcon, IonRow, IonCol } from "@ionic/react";
import { useState } from 'react';
import { camera } from 'ionicons/icons';

import { Camera, CameraResultType } from '@capacitor/camera';


const Tab4 = () => {

        const [cameraImage, setImage] = useState()
        const [loading, setLoading] = useState(false)
        const [showToast] = useIonToast();

        const takePhoto = async () => {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            })
            setImage(image.webPath)
        }


    return(
        <IonPage>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow text-center>
                    <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>
                        <div>
                            <div className='welcome-section ion-padding'>
                                <div className='heading ion-padding'>
                                    <h2>What's In Your Fridge!?</h2>
                                </div>

                                <div >

                                <img src={cameraImage} />

                                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                                    <IonFabButton onClick={() => takePhoto()}>
                                        <IonIcon icon={camera} />
                                    </IonFabButton>
                                </IonFab>


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

export default Tab4;