import React, { useState } from 'react';
import { View, Button, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useSignUp } from '../../context/SignUpContext';
import { supabase } from '../../lib/supabase';

export default function ProfilePicture() {
  const { formData } = useSignUp();
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const handleSubmit = async () => {
    const { email, password } = formData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          ...formData,
          profile_picture: image || null,
        },
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Account created! Check your email.');
      // router.replace('/auth/login');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Pick a profile picture (optional)" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
      <Button title="Finish Sign Up" onPress={handleSubmit} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}
