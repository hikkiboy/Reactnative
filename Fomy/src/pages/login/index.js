import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Logo } from '../../components/logo';

export default function Home({promptAsync}) {
  return (
    <SafeAreaView>
      <Logo/>

      <TouchableOpacity style={styles.bottonCadastro}>
      <Text style={styles.loginCadastro}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottonLogin}>
      <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={styles.bottonCadastroGoogle}
      onPress={() => promptAsync()}>
      <Text style={styles.loginGoogle}>Entrar com Google</Text>
      </TouchableOpacity>

      

  
  

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  bottonCadastro: {
    alignSelf: 'center',
    backgroundColor: '#7EB77F',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 42,
    paddingRight: 42,
    borderRadius: 20,
    borderColor: 'black',
    borderBottomWidth: 7,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    borderWidth: 3,
    margin: 3,
  },
  loginCadastro:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 40,
    paddingRight: 40,
  },
  bottonLogin: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 40,
    paddingRight: 40,
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10
    
  },
  login:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 57,
    paddingRight: 57,
  },
  loginGoogle:{
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 1,
    paddingRight: 1,
  },
  bottonCadastroGoogle: {
    alignSelf: 'center',
    backgroundColor: '#7EB77F',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 42,
    paddingRight: 42,
    borderRadius: 20,
    borderColor: 'black',
    borderBottomWidth: 7,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    borderWidth: 3,
    marginTop: 5
  },
  
});


