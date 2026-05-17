import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function Loading({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      checkInternet();
    }, 2000);
  }, []);

  function checkInternet() {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        navigation.replace('Login'); // 👈 agora funciona
      } else {
        alert('Sem internet, verifique sua conexão.');
      }
    });
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.icon} />

      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5CC6BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 175,
    height: 175,
  }
});