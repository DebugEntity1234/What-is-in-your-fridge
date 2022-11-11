import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment, 
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow, 
  IonButton
} from '@ionic/react';
import './Tab6.css';
import { db } from '../../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/app'

const Tab6 = () => {

  const[postsActive, setPostsActive] = useState(true);
  const[bookmarkActive, setBookmarkActive] = useState(true);


  return (
    <IonPage>
      
      <IonContent className='ion-padding'>
      <div className='heading ion-padding'>
        <h2>Profile</h2>
      </div>

        <div className='welcome-section ion-padding'>
          <IonSegment value={ postsActive ? 'posts' : 'bookmark' }>
          <IonSegmentButton 
            value='posts' 
            onClick={(e) => {
              setPostsActive(true);
              setBookmarkActive(false);
            }} 
          >
            <IonLabel>Posts</IonLabel>
          </IonSegmentButton>
          
          <IonSegmentButton 
            value='bookmark' 
            onClick={(e) => {
              setPostsActive(false);
              setBookmarkActive(true);
            }}
          >
          <IonLabel>Bookmark</IonLabel>
          </IonSegmentButton>
        </IonSegment>


    
        {postsActive ? (
            <IonGrid>
                  <IonRow>
                  <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>
                      <div>
                          <div className='heading ion-padding'>
                              <h2>Posts</h2>
                              
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
                                <h2>Bookmark</h2>
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

export default Tab6;
