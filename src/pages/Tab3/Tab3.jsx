import { useState , useEffect } from "react"
import { db } from '../../config/firebase';
import { collection, onSnapshot , where, query, orderBy , limit, getDocs } from '@firebase/firestore'
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid, 
  IonRow,
  IonCol,
  IonLabel, 
  IonList, 
  IonItem
} from '@ionic/react';
import './Tab3.css';


const Tab3 = () => {
  const [pr , setPr] = useState([])
  const [search ,setSearch]=useState('')
  const users = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(users);
      setPr(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    }
    getUsers();
  }, []);

  console.log(pr)
  
  return (
    <IonPage>
      <IonContent className='ion-padding'>
      <div className='heading ion-padding'>
        <h2 >Search</h2>
      </div>
      <IonGrid>
          <IonRow>
          <IonCol size='12' size-xs='12' size-sm='6' size-md='4' size-lg='3'>
              <div className='welcome-section ion-padding'>
                <div>
                  <Box component="form" sx={{'& > :not(style)': {width: '350px' },}}
                      noValidate
                      autoComplete="off"
                      className="inputs"
                    >
                    <TextField
                      id="search-bar"
                      className="text"
                      variant="outlined"
                      placeholder="Search..."
                     
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <IconButton aria-label="search" >
                      <SearchIcon style={{ fill: "#FF8126" }} />
                    </IconButton>
                  </Box>
                  
                </div>
                  { search &&
                    pr.filter((val) => {
                      if(search === '') {
                        return val
                      } else if (val.fname.toLowerCase().includes(search.toLowerCase())){
                        return val
                      }
                    }).map((item, index) => {
                      return (
                        <div className='heading' key={index}>
                          <p>{item.fname}</p>
                        </div>
                      )
                    })
                  }
              </div>
              </IonCol>
          </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
