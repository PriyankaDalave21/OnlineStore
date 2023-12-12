import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const Login = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const hardcodedOTP = '1234';

  const handleLogin = () => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    const otpRegex = /^[0-9]{4}$/;

    if (!mobileNumberRegex.test(mobileNumber)) {
      setError('Invalid mobile number. Please enter a 10-digit number.');
    } else if (!otpRegex.test(otp)) {
      setError('Invalid OTP. Please enter a 4-digit OTP.');
    } else if (otp === hardcodedOTP) {
      navigation.replace('Home');
    } else {
      setError('Incorrect OTP. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../Images/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Enter mobile number 
        </Text>
        <TextInput
          placeholder=" 10 Digit Mobile Number"
          style={styles.input}
          keyboardType="numeric"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
        <TextInput
          placeholder="Enter OTP"
          style={styles.input}
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
        />
        <Button
          title="Login"
          onPress={handleLogin}
          color="#E52B50"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', 
    textAlign:'center'
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
