import React, { useEffect, useState } from "react";
import { IonButton, IonContent, IonCardContent, IonCard, IonPage, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, useIonToast,IonAvatar} from "@ionic/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { TextField } from "@mui/material";



function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [showToast] = useIonToast();
  const [username, setUsername] = useState('');
  const [fname, setfName] = useState('');
  const navigate  = useHistory();

  const history = useHistory();
  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     showToast({messsage: "An error occured while fetching user data", duration: [4000]});
  //   }
  // };
  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return history.push("/signIn");
  //   fetchUserName();
  // }, [user, loading]);

  const updateStuff = async () => {
    // if(fname !== ''){
    //   onAuthStateChanged(auth, async (user) => {
    //     if(user){
    //       const userId = user.uid;
    //       const documentRef = doc(db, "users", userId)
    //       await updateDoc(documentRef, {fname : fname})
    //     }
    //   })
    // }
    try {
      const user = auth.currentUser
      await updateDoc(doc(db, 'users', user.uid), {
        username: username,
        fname: fname,
      })
      navigate.push('/tab2')
    } catch (error) {
      alert(error.messsage)
    }
    }
  

    const signOut = async () => {
      await logout();
      history.push("/signIn");
    }
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
            <div className='welcome-section ion-padding'>
                <div className='heading ion-padding'>
                    <h2>User Dashboard</h2>

                    <h2>Logged in as</h2>
                    <p>{name}</p>
                    <p>{user?.email}</p>

                      <div>
                        <TextField id="outlined-basic" label="Name" variant="outlined" value={fname} onChange={(e) => setfName(e.target.value)} />
                            <TextField id="outlined-basic" label="fname" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
                          <IonButton
                           onClick={updateStuff}
                          >Edit Profile</IonButton>
                      </div>

                    
                  </div>

                <div className="action flex-row-hstart-vstart">
                <div className="login flex-row-vcenter-hcenter">
                    <IonButton className="login-btn" fill="clear" onClick={signOut}>Log Out</IonButton>
                </div>

                </div>
            </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
export default Dashboard;