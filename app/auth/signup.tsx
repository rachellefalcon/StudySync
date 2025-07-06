// app/auth/signup.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studyStyle, setStudyStyle] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSignUp = async () => {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      Alert.alert('Sign-Up Failed', signUpError.message);
      return;
    }

    const user = data.user;

    const { error: insertError } = await supabase
      .from('users')
      .insert([
        {
          id: user?.id,
          email,
          study_style: studyStyle,
          availability,
        },
      ]);

    if (insertError) {
      Alert.alert('Profile Error', insertError.message);
      return;
    }

    Alert.alert('Success', 'Account created! Please check your email to confirm.');
    router.replace('/auth/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Study Style (e.g. Group, Visual)"
        value={studyStyle}
        onChangeText={setStudyStyle}
        style={styles.input}
      />
      <TextInput
        placeholder="Availability (e.g. Weekends, Evenings)"
        value={availability}
        onChangeText={setAvailability}
        style={styles.input}
      />

      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
});
