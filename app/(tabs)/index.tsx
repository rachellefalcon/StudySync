import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

//Home Screen
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to StudySync 👋</Text>
      <Text style={styles.subtitle}>Match with students studying the same subjects near you.</Text>

      <Link href="/(tabs)/swipe" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Start Swiping</Text>
        </Pressable>
      </Link>

      <Link href="/(tabs)/matches" asChild>
        <Pressable style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.buttonText}>View Matches</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#6366F1',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

