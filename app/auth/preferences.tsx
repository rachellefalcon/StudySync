import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useSignUp } from '../../context/SignUpContext';

const options = ['Group', 'One-on-One', 'Quiet', 'Collaborative', 'Note-Taking', 'Teaching'];

export default function Preferences() {
  const { updateForm } = useSignUp();
  const router = useRouter();

  const [selected, setSelected] = useState([]);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleNext = () => {
    updateForm({ preferences: selected });
    router.push('profile-picture');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Select your study preferences</Text>
      {options.map((option) => (
        <TouchableOpacity key={option} onPress={() => toggleOption(option)}>
          <Text style={{ padding: 10, backgroundColor: selected.includes(option) ? '#ddd' : '#eee' }}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}
