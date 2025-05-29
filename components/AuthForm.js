import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AuthForm({ email, setEmail, password, setPassword, onSubmit, title }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder='Password' style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <Button title={title} onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});