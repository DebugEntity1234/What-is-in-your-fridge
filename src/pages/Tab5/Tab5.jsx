import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment, 
  IonSegmentButton,
  IonLabel,
  IonRow, 
  IonCol, 
  IonGrid
} from '@ionic/react';
import './Tab5.css';

const Tab5 = () => {

  const[likesActive, setLikesActive] = useState(true);
  const[commentsActive, setCommentsActive] = useState(true);

  return (
    <IonPage>
      <IonContent>
      <div className='heading ion-padding'>
        <h2 >Activities</h2>
      </div>

        <div className='welcome-section ion-padding'>
          <IonSegment value={ likesActive ? 'likes' : 'comments' }>
          <IonSegmentButton 
            value='likes' 
            onClick={(e) => {
              setLikesActive(true);
              setCommentsActive(false);
            }} 
          >
            <IonLabel>Likes</IonLabel>
          </IonSegmentButton>
          
          <IonSegmentButton 
            value='comments' 
            onClick={(e) => {
              setLikesActive(false);
              setCommentsActive(true);
            }}
          >
          <IonLabel>Comments</IonLabel>
          </IonSegmentButton>
        </IonSegment>


    
        {likesActive ? (
            <IonGrid>
                  <IonRow>
                  <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>
                      <div>
                          <div className='heading ion-padding'>
                              <h2>Likes</h2>
                          </div>


                      </div>
                      </IonCol>
                  </IonRow>
              </IonGrid>
                    
        ) : (

              <IonGrid>
                    <IonRow>
                    <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>
                        <div >
                            <div div className='heading ion-padding'>
                                <h2>Comments</h2>
                            </div>


                        </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
              )}
    </div>
    </IonContent>
    </IonPage>

  );
};

export default Tab5;
