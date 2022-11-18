import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//importação do firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAIUfVB3AcYD4BkGirhj8uW2CE0Sd4u28",
  authDomain: "appexpo-ce681.firebaseapp.com",
  projectId: "appexpo-ce681",
  storageBucket: "appexpo-ce681.appspot.com",
  messagingSenderId: "697967376422",
  appId: "1:697967376422:web:c712ea7ef46b8a7dce4ee7",
  measurementId: "G-2RLT5Y67PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  
  const [ dados, setDados ] = useState([]);
  useEffect(() => {
    Firebase.firestore.collection("teste").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setDados([doc.data()]);
      });
  });
  
  }, []);

  return (
    <View style={styles.container}>

      {
        dados.map((item) => {
          return <Text>{ item.nome }</Text>
        })
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
