import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
      navigation.replace('HelloWorld');
    } else {
      setError('Incorrect OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <TextInput
        placeholder="Mobile Number"
        style={styles.input}
        keyboardType="numeric"
        value={mobileNumber}s
        onChangeText={setMobileNumber}
      />
      <TextInput
        placeholder="OTP"
        style={styles.input}
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'lightgreen'
  },
  text: {
    fontSize: 24,
    fontWeight:'bold',
    marginBottom: 20,
    
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
