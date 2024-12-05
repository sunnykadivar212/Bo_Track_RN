import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {constant} from '../../config/constant';

export default function LoginScreen() {
  return (
    <View style={styles.maincontainer}>
      {/* Background Colors */}
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer} />

      {/* Centered Content */}
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image source={{uri: 'your-logo-url'}} style={styles.logo} />
          <Text style={styles.title}>Sign in to your Account</Text>
          <Text style={styles.subtitle}>
            Enter your email and password to log in
          </Text>
        </View>

        <View style={styles.container}>
          <View>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              style={styles.input}
              keyboardType="email-address"
            />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              style={styles.input}
              secureTextEntry
            />
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.rememberMe}>
              <CheckBox />
              <Text>Remember me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>
                {constant.forgotpassword}
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                {constant.loginscreen.button.login}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Don’t have an account?{' '}
            <Text style={styles.signUpText}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    position: 'relative',
  },
  topContainer: {
    position: 'absolute',
    backgroundColor: '#007bff',
    height: height * 0.5,
    width: '100%',
  },
  bottomContainer: {
    position: 'absolute',
    top: height * 0.5,
    backgroundColor: '#ffffff',
    height: height * 0.5,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    color: '#d9d9d9',
  },

  container: {
    backgroundColor: '#fff',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
  },
  signUpText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
