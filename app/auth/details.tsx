import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSignUp } from '../../context/SignUpContext';

export default function Details() {
  const { updateForm } = useSignUp();
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const handleNext = () => {
    updateForm({ fullName, birthday, gender });
    router.push('education');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Full Name</Text>
      <TextInput value={fullName} onChangeText={setFullName} />
      <Text>Birthday (YYYY-MM-DD)</Text>
      <TextInput value={birthday} onChangeText={setBirthday} />
      <Text>Gender</Text>
      <TextInput value={gender} onChangeText={setGender} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}
