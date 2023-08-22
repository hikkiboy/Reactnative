import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Logo } from '../../components/logo';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import {userInfo} from '../login/index';

const getUserInfo = async (token) => {
  if (!token) return;
  try {
    const response = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const user = await response.json();
    await AsyncStorage.setItem("@user", JSON.stringify(user));
    setUserInfo(user);
  } catch (error) {
    // Add your own error handler here
  }
};

export function Home() {
  return (
    <View>
    {userInfo?.picture && (
      <Image  source={{ uri: userInfo?.picture }} style={styles.image}/>)}
    </View>
    )
}