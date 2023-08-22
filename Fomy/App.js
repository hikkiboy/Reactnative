import * as React from "react";
import  Home from "../Fomy/src/pages/home/index";
import SignInScreen from "./src/pages/login";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from './firebaseConfig'
import AsyncStorage from "@react-native-async-storage/async-storage";


WebBrowser.maybeCompleteAuthSession();



export default function App(){
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "192960584778-d1prdheqrt3l6fn750bi6f0t6it2l4j5.apps.googleusercontent.com",
    expoClientId: "192960584778-naftg1is99qdrec2f2p83n2s95jn29ae.apps.googleusercontent.com"
  });

  const checkLocal = async () => {
    try {
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("dados locais: ", userData);
      setUserInfo(userData);
    } catch (error) {
      alert(error)
    }
  }

  React.useEffect(() => {
    checkLocal();
    if(response?.type == "success"){
      const {id_token} = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response])

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if(user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user))
      } else{
        console.log("else")
      }
    })

    return () => unsub();
  },[])
  

  //return <Home/>;
  return userInfo ? <Home/>  : <SignInScreen promptAsync={promptAsync}/>

}