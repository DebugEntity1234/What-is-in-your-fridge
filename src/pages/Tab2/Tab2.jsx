import React, { useState, useEffect } from 'react';
import { IonFab, IonFabButton } from '@ionic/react';
import { add } from 'ionicons/icons';
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
  IonCard, 
  IonCardContent,
  IonImg, 
  IonAvatar, 
  IonCardTitle, 
  IonText,
  IonItem, 
  IonCardHeader, 
  IonFooter, 
  IonButton,
  IonIcon,

} from '@ionic/react';
import  RecipeReviewCard  from './Feed';
import { thumbsUp, time, text } from 'ionicons/icons';
import './Tab2.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';


const Tab2 = () => {
  const[followingActive, setFollowingActive] = useState(true);
  const[exploreActive, setExploreActive] = useState(true);
  


  return (
    <IonPage>

      <div 
      
      className='ion-padding'
      >
      <div className='heading'>
        <h2>Feed</h2>
      </div>
        <div className='welcome-section ion-padding'>
          <IonSegment value={ followingActive ? 'following' : 'explore' }>
          <IonSegmentButton 
            value='following' 
            onClick={(e) => {
            setFollowingActive(true);
            setExploreActive(false);
            }} 
          >
            <IonLabel>Following</IonLabel>
          </IonSegmentButton>
          
          <IonSegmentButton 
            value='explore' 
            onClick={(e) => {
              setFollowingActive(false);
              setExploreActive(true);
            }}
          >
          <IonLabel>Explore</IonLabel>
          </IonSegmentButton>
        </IonSegment>

    
        {followingActive ? (
          <IonContent>
            <IonGrid>
                  <IonRow>
                  <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>
                    
                    <RecipeReviewCard />
                    
                    
                  </IonCol>
                  </IonRow>
              </IonGrid>
              </IonContent>
                    
        ) : (
          <IonContent>
              <IonGrid>
                    <IonRow>
                    <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>

                            <RecipeReviewCard />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
              )}

                  <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton href='/tab4'>
                      <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                  </IonFab>
      </div>
      </div>
    </IonPage>
  );
};

export default Tab2;
