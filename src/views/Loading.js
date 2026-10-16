import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ActivityIndicator, Alert } from 'react-native';
import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function Loading({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      checkInternet();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function checkInternet() {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        navigation.replace('Login'); // 👈 agora funciona
      } else {
        Alert.alert('Sem internet', 'Verifique sua conexão.', [
          { text: 'Tentar novamente', onPress: checkInternet },
        ]);
      }
    });
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.icon} />

      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />

      <StatusBar style="light" />
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