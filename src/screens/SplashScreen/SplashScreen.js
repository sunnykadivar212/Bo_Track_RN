import React, {useEffect} from 'react';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      try {
        const token = await AsyncStorage.getItem('authentication_token');
        if (token) {
          navigation.replace('Demo');
        } else {
          navigation.replace('LoginScreen');
        }
      } catch (error) {
        console.error('Error checking authentication token:', error);
        navigation.replace('LoginScreen');
      }
    };

    checkTokenAndNavigate();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../Assets/splash.png')}
          style={styles.logo}
        />
        <ActivityIndicator size="large" color="#3366ff" style={styles.loader} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
