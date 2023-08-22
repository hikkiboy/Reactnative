import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Logo } from '../../components/logo';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

export function Home() {
  return (
    <View>
      <Button
      title = "Sair" onPress={async () => await signOut(auth)}
      />
    </View>
  )
}