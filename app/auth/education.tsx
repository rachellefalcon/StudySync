import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSignUp } from '../../context/SignUpContext';

export default function Education() {
  const { updateForm } = useSignUp();
  const router = useRouter();

  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [classes, setClasses] = useState('');

  const handleNext = () => {
    updateForm({ school, major, classes });
    router.push('preferences');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>School</Text>
      <TextInput value={school} onChangeText={setSchool} />
      <Text>Major</Text>
      <TextInput value={major} onChangeText={setMajor} />
      <Text>Classes (comma-separated)</Text>
      <TextInput value={classes} onChangeText={setClasses} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}
