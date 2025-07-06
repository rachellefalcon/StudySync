import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useSignUp } from '../../context/SignUpContext';

export default function Credentials() {
  const { updateForm } = useSignUp();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!email || !phone || !password || !retypePassword) {
      setError('Please fill all fields');
      return;
    }
    if (password !== retypePassword) {
      setError('Passwords do not match');
      return;
    }

    updateForm({ email, phone, password });
    router.push('details');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <Text>Phone</Text>
      <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Text>{showPassword ? 'Hide' : 'Show'} Password 👁️</Text>
      </TouchableOpacity>
      <Text>Retype Password</Text>
      <TextInput
        value={retypePassword}
        onChangeText={setRetypePassword}
        secureTextEntry={!showPassword}
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}
