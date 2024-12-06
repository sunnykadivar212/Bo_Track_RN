import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {userLogin} from '../../APi/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('sunny19.virtueinfo@gmail.com');
  const [password, setPassword] = useState('sunny@2002');
  const [errors, setErrors] = useState({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    let valid = true;
    let emailError = '';
    let passwordError = '';

    if (!email) {
      emailError = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'Enter a valid email';
      valid = false;
    }

    if (!password) {
      passwordError = 'Password is required';
      valid = false;
    }

    setErrors({email: emailError, password: passwordError});
    return valid;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    setLoading(true);

    const body = {
      user: {
        email: email.trim(),
        password: password.trim(),
      },
    };

    try {
      const response = await userLogin(body);

      if (response.success) {
        const userRole = response.user.role_names;
        try {
          await AsyncStorage.setItem(
            'authentication_token',
            response.user.authentication_token,
          );
        } catch (storageError) {
          console.error('Failed to store token:', storageError);
        }
        navigation.navigate('DrawerNavigation');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error.message || error);
      setErrors({
        email: 'Invalid email or password',
        password: 'Invalid email or password',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer} />

      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Image
              source={require('../../Assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Sign in to your Account</Text>
          <Text style={styles.subtitle}>
            Enter your email and password to log in
          </Text>
        </View>

        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              style={[styles.input, errors.email ? styles.inputError : null]}
              keyboardType="email-address"
              value={email}
              onChangeText={text => {
                setEmail(text);
                if (errors.email) setErrors({...errors, email: ''});
              }}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              style={[styles.input, errors.password ? styles.inputError : null]}
              secureTextEntry
              value={password}
              onChangeText={text => {
                setPassword(text);
                if (errors.password) setErrors({...errors, password: ''});
              }}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>Log In</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
  },
  logo: {
    width: 200,
    height: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  formContainer: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputError: {
    borderColor: '#ff4d4d',
  },
  errorText: {
    color: '#ff4d4d',
    fontSize: 12,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
