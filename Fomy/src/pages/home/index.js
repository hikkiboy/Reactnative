import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Logo } from '../../components/logo';

export function Home() {
  return (
    <SafeAreaView>
      <Logo/>

      <TouchableOpacity style={styles.bottonCadastro}>
      <Text style={styles.loginCadastro}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottonLogin}>
      <Text style={styles.login}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.otherOptions}>-- ou entre com --</Text>

  
  

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
    borderBottomWidth: 7,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    borderWidth: 3,
    marginTop: 5
  },
  login:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    paddingLeft: 57,
    paddingRight: 57,
  },
  otherOptions:{
    top: 50,
    textAlign: 'center',
    fontSize: 20,
    opacity: 0.3,
    width:'100%',
    marginBottom: 100
    },
  loginGoogle:{
    padding: 30,
    width: 60,
    height: 60,
    marginTop: 15,
    paddingBottom: 10
  },
  buttonGoogle:{
    borderRadius: 20,
  },
  loginFacebook:{
    textAlign:'center',
    width: 100,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonFacebook:{
    marginLeft: 50,
    borderRadius: 20,
  },
  loginsDiff:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
});


