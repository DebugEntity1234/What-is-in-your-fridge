import { Geolocation } from 'capacitor-geolocation';

const Geolocation = () => {
  const [position, setPosition] = useState({ coords: { latitude: 0, longitude: 0 } });
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({ coords });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Geolocation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Geolocation</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {error ? (
              <div>{error}</div>
            ) : (
              <div>
                <div>Latitude: {position.coords.latitude}</div>
                <div>Longitude: {position.coords.longitude}</div>
              </div>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}